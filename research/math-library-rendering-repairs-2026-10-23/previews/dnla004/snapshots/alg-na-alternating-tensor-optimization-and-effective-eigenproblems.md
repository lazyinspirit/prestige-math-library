---
id: alg-na-alternating-tensor-optimization-and-effective-eigenproblems
kind: algorithm
title: "Finite alternating tensor optimization with effective eigenproblems"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - lem-na-periodic-mps-to-open-tt
  - lem-na-mixed-canonical-qr-gauge-preserves-state
  - lem-na-mps-environment-isometry-and-effective-hamiltonian
  - lem-na-finite-hermitian-ground-vector-with-deterministic-tie
  - alg-tensor-train-rounding
  - thm-singular-value-decomposition
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§6.2–6.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §2.7"
      url: "https://arxiv.org/pdf/2606.24803"
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §3"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, lecture notes (March 11, 2026), §§1.2.2, 1.2.4–1.2.5"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
dependency_level: 4
---

## Definition

Work in exact arithmetic over a fixed field $\mathbb F\in\{\mathbb R,\mathbb C\}$ and order $d\ge2$. The inputs are:

- a normalized finite MPS/TT state $\psi\in\mathbb F^{n_1\times\cdots\times n_d}$ together with one concrete presentation of $\psi$, either an open-boundary TT core list or periodic trace matrices; the supplied presentation must contract to $\psi$;
- a finite Hermitian Hamiltonian $H$ on that same tensor-array coefficient space;
- a positive integer sweep budget $M$;
- a window width $w\in\{1,2\}$; and
- optionally, positive integer rank caps $c_1,\ldots,c_{d-1}$.

The procedure is the following.

1. If the supplied presentation is in periodic trace form, convert it exactly to the open-boundary TT form using [[lem-na-periodic-mps-to-open-tt]]. Otherwise take the supplied open-boundary core list. Keep the resulting open-boundary core list.

2. For each of $M$ full sweeps, perform one forward pass and one backward pass. For width $w$, the windows are the $d$ single sites when $w=1$, or the $d-1$ adjacent site pairs when $w=2$. Visit them in increasing order in the forward pass and decreasing order in the backward pass.

3. Before each window update, place the TT in mixed canonical gauge about that window using the deterministic rank-revealing QR sweeps of [[lem-na-mixed-canonical-qr-gauge-preserves-state]]. Contract the fixed left and right cores to form the isometric center embedding $E$ and compute the finite effective matrix $H_{\mathrm{eff}}=E^*HE$.

4. Apply the exact ground-vector rule of [[lem-na-finite-hermitian-ground-vector-with-deterministic-tie]] to $H_{\mathrm{eff}}$. Let $x$ be the resulting unit eigenvector and replace the center coefficient vector by $x$. Record its local Rayleigh energy $x^*H_{\mathrm{eff}}x=\lambda_{\min}$ and residual $\|H_{\mathrm{eff}}x-\lambda_{\min}x\|_2$.

5. For a two-site window, reshape the updated center as a matrix with row index (left bond, first physical index) and column index (second physical index, right bond). Compute an exact compact SVD $X=U\Sigma V^*$. In a forward pass replace the first core by the reshape of $U$ and absorb $\Sigma V^*$ into the second core. In a backward pass absorb $U\Sigma$ into the first core and replace the second core by the reshape of $V^*$. Retain every positive singular direction, so this split changes no tensor entries. For a one-site window, keep that site as the center.

6. After each complete forward/backward sweep, if rank caps were supplied, apply [[alg-tensor-train-rounding]] to the current TT and record its cut tails $\delta_1,\ldots,\delta_{d-1}$ and $\tau=(\sum_{k=1}^{d-1}\delta_k^2)^{1/2}$. If $\tau<1$, normalize the rounded tensor and continue from it. If $\tau\ge1$, discard that rounded candidate, retain the last normalized unrounded tensor, and record status **rounding-skipped**. If no rank caps were supplied, do not round.

Return the final normalized TT state, the energy and local-residual records, all accepted discarded-tail records, and status **budget-complete** or **rounding-skipped** according to whether any requested rounding was skipped.

## Remarks

The local eigenproblem is specified as an exact finite Hermitian ground solve. The procedure makes no finite-precision stability, polynomial-cost, spectral-gap, global-minimizer, or convergence claim. A periodic input is first converted exactly to an open-boundary TT; the canonical environment argument is applied only to that open-boundary representation.

For a two-site window $J=[k,k+1]$, the schematic below groups all fixed prefix and suffix cores into $L$ and $R$. Their contractions define the isometry $E$ in step 3; a missing boundary environment is the scalar identity. The downward legs are physical indices, and horizontal lines are contracted bond indices. The bracket marks the active window. For width one, the active window instead contains just one core. The arrows indicate the order of window visits, rather than maps between tensor spaces.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node[draw,minimum width=1.3cm,minimum height=0.7cm] (L) at (0,0) {$L$};
\node[draw,minimum width=1.3cm,minimum height=0.7cm] (A) at (2,0) {$G_k$};
\node[draw,minimum width=1.3cm,minimum height=0.7cm] (B) at (4,0) {$G_{k+1}$};
\node[draw,minimum width=1.3cm,minimum height=0.7cm] (R) at (6,0) {$R$};
\draw (L) -- (A) -- (B) -- (R);
\draw (A.south) -- (2,-0.85) node[below] {$i_k$};
\draw (B.south) -- (4,-0.85) node[below] {$i_{k+1}$};
\node at (0,-1.25) {left-isometric};
\node at (6,-1.25) {right-isometric};
\draw (1.2,0.65) -- (1.2,0.9) -- (4.8,0.9) -- (4.8,0.65);
\node at (3,1.25) {active pair};
\draw[->] (0,2.25) -- (6,2.25) node[midway,above] {forward: increasing $k$};
\draw[->] (6,1.7) -- (0,1.7) node[midway,above] {backward: decreasing $k$};
\node at (3,-2.15) {$X=U\Sigma V^*$};
\node[draw,minimum width=2.4cm,minimum height=0.65cm] (UF) at (1.6,-3.15) {$U$};
\node[draw,minimum width=2.4cm,minimum height=0.65cm] (VF) at (4.4,-3.15) {$\Sigma V^*$};
\draw (UF) -- (VF);
\node at (-0.8,-3.15) {forward};
\node[draw,minimum width=2.4cm,minimum height=0.65cm] (UB) at (1.6,-4.15) {$U\Sigma$};
\node[draw,minimum width=2.4cm,minimum height=0.65cm] (VB) at (4.4,-4.15) {$V^*$};
\draw (UB) -- (VB);
\node at (-0.8,-4.15) {backward};
\node at (1.6,-4.85) {site $k$};
\node at (4.4,-4.85) {site $k+1$};
\end{tikzpicture}
```

The lower rows show the exact split in step 5: the factor containing $\Sigma$ is absorbed toward the next window. Both rows contract to the same $X$, with every positive singular direction retained. Optional rank-capped rounding occurs only after both passes of a full sweep, as in step 6. The diagram is explanatory; the procedure and its specified operations stand independently of it.
