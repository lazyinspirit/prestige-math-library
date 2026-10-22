---
id: thm-nrqmx-spin-half-temperley-lieb
kind: theorem
domain: mathematics
library: mathematics
title: "Spin-half swaps realize the Temperley–Lieb algebra at loop weight two"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-spin-half-tensor-chain
  - def-temperley-lieb-generator-presentation
  - lem-nrqmx-temperley-lieb-star-involution
  - def-temperley-lieb-diagram-category
  - prop-nrqm-orbital-and-spin-finite-spin-matrices
  - thm-nrqmx-schur-weyl-exchange-blocks
dependency_roles:
  def-nrqmx-spin-half-tensor-chain: mathematical-premise
  def-temperley-lieb-generator-presentation: mathematical-premise
  lem-nrqmx-temperley-lieb-star-involution: mathematical-premise
  def-temperley-lieb-diagram-category: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqmx-schur-weyl-exchange-blocks: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yacine Ikhlef, Jesper Lykke Jacobsen, and Hubert Saleur, A Temperley–Lieb quantum chain with two- and three-site interactions, §2"
      url: "https://arxiv.org/pdf/0901.4685"
---

## Statement

Let $N\geq1$, $\mathcal H_N=(\mathbb C^2)^{\otimes N}$ with the standard
orthonormal basis $|0\rangle,|1\rangle$ on each factor, and for
$1\leq i<N$ define $s_i$ to swap factors $i,i+1$. Put
$|\omega\rangle=(|01\rangle-|10\rangle)/\sqrt2$,
$P_\omega v=\langle v,\omega\rangle\omega$, let $P_i$ act as $P_\omega$ on
factors $i,i+1$ and identity on all others, and set $e_i=I-s_i$. For every
bond,
$$e_i=I-s_i=2P_i,\qquad e_i^*=e_i,\qquad e_i^2=2e_i.$$
For $1\leq i<N-1$,
$$e_i e_{i+1}e_i=e_i,\qquad e_{i+1}e_i e_{i+1}=e_{i+1},$$
and $e_i e_j=e_j e_i$ when $|i-j|>1$. Consequently the assignment
$u_i\mapsto e_i$ defines a star-preserving algebra representation
$$P_N(\mathbb C,2)\longrightarrow\operatorname{End}(\mathcal H_N).$$
For $\lambda\vdash N$ with at most two rows, put
$M_\lambda=\operatorname{Hom}_{S_N}(S^\lambda,\mathcal H_N)$ and use the
unitary Schur–Weyl decomposition
$\mathcal H_N\cong\bigoplus_{\lambda\vdash N,\,\ell(\lambda)\le2}
S^\lambda\otimes M_\lambda$. Each $e_i$ acts on the Specht factor as
$I-\rho_\lambda((i,i+1))$ and as identity on the multiplicity factor. No
faithfulness assertion is made.

## Statement references

[[def-nrqmx-spin-half-tensor-chain]]

[[def-temperley-lieb-generator-presentation]]

[[thm-nrqmx-schur-weyl-exchange-blocks]]

## Facts & Assumptions

**Given:** The finite tensor chain $\mathcal H_N=(\mathbb C^2)^{\otimes N}$,
its adjacent swaps and singlet projections, and $N\geq1$.

[F1] [[def-nrqmx-spin-half-tensor-chain]]: $s_i$ swaps factors $i,i+1$,
$|\omega\rangle=(|01\rangle-|10\rangle)/\sqrt2$,
$P_i=I^{\otimes(i-1)}\otimes P_\omega\otimes I^{\otimes(N-i-1)}$,
and $e_i=I-s_i$.

[F2] [[prop-nrqm-orbital-and-spin-finite-spin-matrices]]: on $\mathbb C^2$,
$\sigma_a\sigma_b+\sigma_b\sigma_a=2\delta_{ab}I$ for
$a,b\in\{x,y,z\}$; each displayed Pauli matrix is self-adjoint.

[F3] [[def-temperley-lieb-generator-presentation]]: $P_N(\mathbb C,2)$ is
defined by $u_i^2=2u_i$, $u_i u_{i\pm1}u_i=u_i$, and
$u_i u_j=u_j u_i$ for $|i-j|>1$.

[F4] [[lem-nrqmx-temperley-lieb-star-involution]]: the presented algebra has
the conjugate-linear anti-involution fixing every generator and reversing
products.

[F5] [[thm-nrqmx-schur-weyl-exchange-blocks]]: the place permutation action
acts on $S^\lambda$ and as identity on $M_\lambda$, while the diagonal
$U(2)$ action acts on the multiplicity factor.

## Proof

1.1 On $\mathbb C^2\otimes\mathbb C^2$, direct application to the four basis
vectors gives
$$s=\tfrac12\left(I+\sigma_x\otimes\sigma_x+\sigma_y\otimes\sigma_y+ \sigma_z\otimes\sigma_z\right).$$
For $|00\rangle$ and $|11\rangle$, the sum of the three Pauli products is
the vector itself; for $|01\rangle$ it is $2|10\rangle-|01\rangle$, and
for $|10\rangle$ it is $2|01\rangle-|10\rangle$, so the displayed operator
is the factor swap in all four cases. The symmetric three-dimensional
subspace and antisymmetric line are an orthogonal decomposition; $s$ is $+I$
on the former and $-I$ on the latter, whose unit vector is $\omega$.
Therefore $I-s=2P_\omega$, and $(I-s)^2=4P_\omega^2=4P_\omega=2(I-s)$.
Tensoring with identities gives $e_i=2P_i$, self-adjointness, and
$e_i^2=2e_i$ for every bond. [F1, F2, algebra]

2.1 On three adjacent factors, $P_{12}$ has image spanned by
$|\omega\rangle_{12}\otimes|0\rangle$ and
$|\omega\rangle_{12}\otimes|1\rangle$. Applying $P_{23}$ and then $P_{12}$
to these two vectors gives, respectively,
$$P_{12}P_{23}P_{12}(|\omega\rangle_{12}|0\rangle_3) =\tfrac14|\omega\rangle_{12}|0\rangle_3,\qquad P_{12}P_{23}P_{12}(|\omega\rangle_{12}|1\rangle_3) =\tfrac14|\omega\rangle_{12}|1\rangle_3.$$
For example, the first intermediate vector is
$P_{23}(|\omega\rangle_{12}|0\rangle_3)=(-|001\rangle+|010\rangle)/(2\sqrt2)$;
$P_{12}$ kills $|001\rangle$ and sends $|010\rangle$ to
$|\omega\rangle_{12}|0\rangle_3/\sqrt2$. The second computation is the
explicit calculation
$P_{23}(|\omega\rangle_{12}|1\rangle_3)=(-|101\rangle+|110\rangle)/(2\sqrt2)$;
$P_{12}$ kills $|110\rangle$ and sends $|101\rangle$ to
$-|\omega\rangle_{12}|1\rangle_3/\sqrt2$, again giving the coefficient
$1/4$. Since
$P_{12}P_{23}P_{12}$ first projects into the displayed image, it follows on
all eight basis vectors that $P_{12}P_{23}P_{12}=P_{12}/4$. Reversing the
three tensor factors exchanges $P_{12}$ and $P_{23}$ (the singlet line is
unchanged by reversing its two entries), so also
$P_{23}P_{12}P_{23}=P_{23}/4$. Hence
$e_i e_{i+1}e_i=8P_iP_{i+1}P_i=2P_i=e_i$ and the reversed relation holds.
Operators on disjoint tensor factors commute, giving the distant relation.
[F1, step 1.1, algebra]

3.1 The relations proved in steps 1.1 and 2.1 and [F3] give an algebra
homomorphism from the presented quotient, since every defining relation has
zero image. Each $e_i$ is self-adjoint by step 1.1, so the operator adjoint
of a word reverses its factors and fixes its generator images; conjugating
coefficients agrees with the algebra involution [F4]. Thus the representation
preserves $*$. [F3, F4, step 1.1, step 2.1, algebra]

4.1 The adjacent swap is the place action of the transposition
$(i,i+1)$, since that transposition is its own inverse in the left-place
convention. Therefore $e_i=I-\rho((i,i+1))$. Applying the factor placement in
[F5] shows that on each summand $S^\lambda\otimes M_\lambda$ it is
$\bigl(I-\rho_\lambda((i,i+1))\bigr)\otimes I_{M_\lambda}$, as claimed.
[F1, F5, step 3.1, algebra] ∎

## Remarks

Using the conventions of [[def-temperley-lieb-diagram-category]], the standard
Temperley–Lieb diagram for $e_i$ has a cap joining the two
adjacent upper boundary points and a cup joining the corresponding lower
points, with all other strands vertical. Boundary points are numbered from
left to right and diagrams are composed by stacking the left factor above the
right factor. In the spin representation each cap/cup contraction uses the
unnormalized tensor $\sqrt2\,|\omega\rangle$; a closed loop therefore
contributes $2$. The proof above uses tensor contractions, not the diagram.

```tikz
\begin{tikzpicture}[baseline=-.5ex,scale=.62]
  \draw (0,0)--(0,1.6);
  \draw (3,0)--(3,1.6);
  \draw (1,1.6) .. controls (1,0.9) and (2,0.9) .. (2,1.6);
  \draw (1,0) .. controls (1,0.7) and (2,0.7) .. (2,0);
  \foreach \x in {0,1,2,3} {\fill (\x,0) circle (2pt); \fill (\x,1.6) circle (2pt);}
  \node at (1.5,-.45) {$e_i$};
\end{tikzpicture}
```

The upper cap and lower cup are not used as an argument: the algebraic
relations above were verified directly on the tensor factors.
