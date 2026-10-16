---
id: alg-qa-28-qsvt-matrix-function
kind: algorithm
title: QSVT implementation of a bounded matrix function
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-24-singular-value-transform
  - alg-qa-24-qsvt
  - def-qa-22-block-encoding
  - def-qa-22-block-encoding-access-model
  - alg-qa-22-lcu-block-encoding
  - alg-qa-23-qsp-phase-synthesis
  - thm-qa-23-qsp-synthesis-correctness
  - def-qc-dirac-notation-conversion
justified_by: []
axiom_use: "None; the construction is a finite composition of supplied block encodings, phase sequences, and an LCU circuit."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.2–29.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §§2–3"
      url: "https://arxiv.org/pdf/1806.01838"
---

## Definition

**Inputs.** A nonzero finite-dimensional Hermitian matrix $H$, a scale $\alpha>0$ with $\|H\|\le\alpha$, a supplied unit-normalized $(1,a,\varepsilon_{BE})$ block encoding of $A=H/\alpha$ in the sense of [[def-qa-22-block-encoding]], with designated compression $\widetilde A$ satisfying $\|\widetilde A-H/\alpha\|\le\varepsilon_{BE}$ (and $\varepsilon_{BE}=0$ for exact access), a function $f$ on $\sigma(H)$, and a caller-supplied extension $\bar f:[-\alpha,\alpha]\to\mathbb C$ agreeing with $f$ on the spectrum. Let $J$ be a nonempty subset of $\{0,1,2,3\}$. For each $j\notin J$, supply an exact certificate that $g_j$ is identically zero on $[-\alpha,\alpha]$. For each $j\in J$, supply a positive scale $\gamma_j$ satisfying $|g_j(t)|\le\gamma_j$ on that interval, a tolerance $\tau_j\ge0$, a nonnegative degree bound $d_j$, and a real polynomial $p_j$ of degree at most $d_j$ and parity $d_j\bmod2$ (including when $p_j=0$), with $|p_j(x)|\le1$ on $[-1,1]$ and
$$\left|p_j(x)-\frac{g_j(\alpha x)}{\gamma_j}\right|\le\tau_j\qquad(-1\le x\le1).$$
For each active component, also supply either a reflected-convention phase-list certificate of length $d_j+1$ for which the real part of the QSP sequence's upper-left entry equals $p_j$ (exactly or within a certified uniform error bound), or, when $p_j$ has rational or exact algebraic coefficients, a positive rational phase-synthesis tolerance $\nu_j$ for OP1. The certificate's finite verification procedure and cost are included in the phase-source record. Any certified phase-generation or compilation error is recorded for the component and included in its implementation-error bound $\kappa_j$ in [[thm-qa-28-matrix-function-error-cost]].

Here the four real component functions are
$$g_0(t)=\frac{\Re\bar f(t)+\Re\bar f(-t)}2,\quad g_1(t)=\frac{\Re\bar f(t)-\Re\bar f(-t)}2,$$
$$g_2(t)=\frac{\Im\bar f(t)+\Im\bar f(-t)}2,\quad g_3(t)=\frac{\Im\bar f(t)-\Im\bar f(-t)}2.$$
Thus $g_0,g_2$ are even, $g_1,g_3$ are odd, and $\bar f=g_0+g_1+i g_2+i g_3$. The zero certificates and scale bounds give $|\bar f(t)|\le B:=\sum_{j\in J}\gamma_j$; the construction makes no optimal-normalization claim. For an identically zero target with $\bar f=0$, one may take $J=\{0\}$, $\gamma_0=1$, $d_0=0$, $\tau_0=0$, and $p_0=0$; the exact list $\Phi_0=(\pi/2)$ certifies its phase source since the degree-zero QSP upper-left entry is $e^{i\pi/2}=i$.

**Additional input.** An LCU access record that supplies or compiles the coefficient-preparation unitary $P$, its inverse, and the required SELECT from the active component circuits, with all implementation costs declared as in [[def-qa-22-block-encoding-access-model]].

**Output.** The LCU circuit $W$ constructed with declared normalization $B$ and designated top-left block $W_{00}$. The error bound for $W_{00}$ is given separately by [[thm-qa-28-matrix-function-error-cost]]. If a supplied phase certificate fails its stated verification or OP1 returns a non-success result, return that failure and no block-encoding output.

**Instructions.** For each $j\in J$, verify its supplied phase-list certificate's length, reflected-convention polynomial identity or uniform error bound; if no list is supplied, run [[alg-qa-23-qsp-phase-synthesis]] under OP1 on $p_j$ with degree bound $d_j$, required parity $d_j\bmod2$, and tolerance $\nu_j$. Propagate any certificate, synthesis or compilation failure without producing a block-encoding output. Apply [[alg-qa-24-qsvt]] to the supplied block encoding to produce the singular-value transform block for $p_j$, retaining separate ancillas and all inverse, controlled, projector-phase, compilation, and implementation-error costs. Since $p_j$ is real with known parity, the even or odd transform is selected by its parity. Any certified phase or implementation deviation from the ideal $p_j$ transform is included in $\kappa_j$.

Run [[alg-qa-22-lcu-block-encoding]] on the component unitaries indexed by $J$, with unit component normalizations and coefficients $c_j\gamma_j$, where $c_0=c_1=1$ and $c_2=c_3=i$. Its LCU normalization is $B=\sum_{j\in J}\gamma_j>0$. Return its designated top-left block as an approximation to $f(H)/B$. OP1 and the matrix-function error theorem specify the phase and error obligations.

This algorithm does not claim a general efficient approximation theorem, automatic extension of $f$, or a finite bit-time phase compiler beyond the stated exact-algebraic/rational OP1 interface. Charge polynomial descriptions, root/phase generation, state preparation, SELECT, PREPARE and its inverse, all QSVT calls, gate compilation, and all output bits under the separate cost coordinates.
