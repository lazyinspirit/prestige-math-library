---
id: cex-universal-weyl-c-star-algebra-has-nonregular-representations
kind: counterexample
title: The universal Weyl C*-algebra has nonregular representations
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-universal-weyl-c-star-algebra
  - lem-universal-weyl-c-star-algebra-is-well-defined
  - def-countable-choice
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - thm-metric-completion-exists
  - thm-metric-completion-carries-a-unique-banach-space-structure
  - thm-completion-of-an-inner-product-space-is-hilbert
proof_strategy: direct
axiom_use: "Countable Choice is inherited through the stated Hilbert-space and universal-completion constructions; the discontinuity calculation is choice-free."
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2"
      url: "https://arxiv.org/pdf/1904.04051v2"
---

## Statement

Assume Countable Choice. Let $V=\mathbb R^2$ with its standard symplectic form and fix
$\lambda\ne0$. The universal Weyl $C^*$-algebra
$C^*_{\mathrm W}(V,\omega,\lambda)$ has a representation in which the Weyl
generators are not strongly continuous on real lines. Thus its universal
property does not restrict representations to the regular ones. In the
construction below, $\ell^2(V)$ denotes the Hilbert completion of the
finite-support functions on $V$ with their canonical inner product.

## Facts & Assumptions

**Given:** The symplectic plane, $\lambda\ne0$, and the universal Weyl algebra.

[F1] The algebraic Weyl symbols obey $\delta_v\delta_w=m_\lambda(v,w)\delta_{v+w}$, $\delta_v^*=\delta_{-v}$, where $m_\lambda(v,w)=e^{-i\lambda\omega(v,w)/2}$; the universal completion extends every unital $*$-representation of these relations ([[def-universal-weyl-c-star-algebra]], [[lem-universal-weyl-c-star-algebra-is-well-defined]]).

[F2] The finite-support functions on $V$ form an inner-product space under $\langle a,b\rangle=\sum_{x\in V}a_x\overline{b_x}$, with the coordinate vectors $(\delta_x)_{x\in V}$ orthonormal. Under Countable Choice its norm completion is a Hilbert space, with these vectors still orthonormal and their span dense ([[def-real-and-complex-inner-product-space]], [[thm-metric-completion-exists]], [[thm-metric-completion-carries-a-unique-banach-space-structure]], [[thm-completion-of-an-inner-product-space-is-hilbert]]).

[A1] Countable Choice is included in the Hilbert and universal completion interfaces ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 On basis vectors of the finite-support subspace of $\ell^2(V)$ define $L_v\delta_x=m_\lambda(v,x)\delta_{v+x}$. Since $|m_\lambda(v,x)|=1$ and $x\mapsto v+x$ is a bijection of $V$, $L_v$ preserves the inner product and maps finite-support vectors to finite-support vectors. It extends to $\ell^2(V)$ by $L_v[(a_n)]=[(L_va_n)]$ on Cauchy-sequence classes; the extension is unitary with inverse $L_{-v}$. The cocycle identity gives $L_vL_w\delta_x=m_\lambda(w,x)m_\lambda(v,w+x)\delta_{v+w+x}=m_\lambda(v,w)m_\lambda(v+w,x)\delta_{v+w+x}=m_\lambda(v,w)L_{v+w}\delta_x.$ Hence $L_vL_w=m_\lambda(v,w)L_{v+w}$ on the dense basis span and then everywhere. Also $L_0=I$ and $L_v^*=L_{-v}$, so $\delta_v\mapsto L_v$ extends linearly to a unital $*$-representation of the twisted finite-support algebra. [A1, F1, F2, given, construct]

2.1 By [F1], this unital $*$-representation is contractive for the universal seminorm and extends to a representation $\Pi$ of $C^*_{\mathrm W}(V,\omega,\lambda)$ with $\Pi(\delta_v)=L_v$. [F1, step 1.1]

3.1 Fix any nonzero $v\in V$. For every real $t\ne0$, $L_{tv}\delta_0=\delta_{tv}$, while $L_0\delta_0=\delta_0$. Since $tv\ne0$, these are distinct orthonormal basis vectors, and therefore $\|L_{tv}\delta_0-L_0\delta_0\|_2=\sqrt2$ for every $t\ne0$. The orbit map $t\mapsto\Pi(\delta_{tv})$ is not strongly continuous at zero. This proves that $\Pi$ is nonregular although it is a representation of the universal Weyl $C^*$-algebra. [step 1.1, step 2.1, algebra] ∎
## Boundary cases

- The discontinuity holds for every nonzero $v$ and every fixed real $\lambda\ne0$.
- This refutes regularity of all representations of the universal completion; it makes no claim that this particular representation is irreducible.
