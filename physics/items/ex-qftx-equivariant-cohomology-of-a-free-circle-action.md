---
id: ex-qftx-equivariant-cohomology-of-a-free-circle-action
kind: example
title: "The free translation action of the circle on itself"
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - def-standard-product-torus-as-a-compact-lie-group
  - def-fundamental-vector-field-of-a-left-action
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-smooth-differential-k-form
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - cor-singular-cohomology-is-homotopy-invariant
  - def-torus-equivariant-cohomology-cartan-model
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-standard-product-torus-as-a-compact-lie-group: mathematical-premise
  def-fundamental-vector-field-of-a-left-action: mathematical-premise
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  thm-milnor-join-model-is-a-contractible-free-g-space: mathematical-premise
  cor-singular-cohomology-is-homotopy-invariant: mathematical-premise
  def-torus-equivariant-cohomology-cartan-model: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jonas Menzi and Finn Michler, A Brief Introduction to Equivariant Cohomology"
      url: "https://people.math.ethz.ch/~acannas/Teaching/Moment_Map_2026/Papers/09_Introduction_to_Equivariant_Cohomology.pdf"
      locator: "§2.1 Borel model, §2.2 Cartan model, and §3 Theorem 3.1 and proof for free circle actions (PDF pp. 2–10)."
    - title: "Qiuyu Ren, Equivariant de Rham Theory, complete lecture notes"
      url: "https://math.berkeley.edu/~qiuyu/papers/Equivariant_de_Rham_Theory.pdf"
      locator: "§§2.1 and 4.3–4.4: homotopy quotient, Cartan model, and coordinate differential (PDF pp. 9–22)."
landmark: false
---

## Example

Assume AC. Let $T=M=\mathbb R/\mathbb Z$, with $T$ acting on $M$ by left translation $t\cdot[x]=[t+x]$. Use the period-one tangent generator $e$, so the library convention gives $X_e=-\partial_x$, and let $\eta$ be the global one-form on $\mathbb R/\mathbb Z$ descended from $-dx$ on $\mathbb R$. In the chosen Borel model the map $[v,x]\mapsto v\cdot x$ identifies $ET\times_TT$ with $ET$, hence $H_T^0(T;\mathbb R)=\mathbb R$ and $H_T^k(T;\mathbb R)=0$ for $k>0$. The invariant Cartan complex is $\mathbb R[u]\oplus\mathbb R[u]\eta$, with $|u|=2$, $|\eta|=1$, $d_TP(u)=0$, and $d_T(P(u)\eta)=-uP(u)$. Its cohomology is $\mathbb R$ in degree zero and zero in positive degrees, agreeing with the Borel calculation for this action.

## Example references

[Borel and Cartan definitions and the fixed sign convention] [[def-torus-equivariant-cohomology-cartan-model]]

[Period-one circle exponential] [[def-standard-product-torus-as-a-compact-lie-group]]

[Fundamental-vector-field sign convention] [[def-fundamental-vector-field-of-a-left-action]]

[Contractible free circle model] [[thm-milnor-join-model-is-a-contractible-free-g-space]]

## Facts & Assumptions

**Given:** AC, $T=M=\mathbb R/\mathbb Z$, the left translation action, and the Borel and Cartan conventions in the A-page definition.

[A1] Assume AC, as carried by the A-page definition and its imported mathematical inputs. [[def-axiom-of-choice]]

[F1] The selected Borel quotient is $(ET\times M)/T$ under $(v,x)\cdot h=(v\cdot h,h^{-1}\cdot x)$; the Cartan differential uses the negative-exponential fundamental vector field. [[def-torus-equivariant-cohomology-cartan-model]]

[F2] The selected Milnor model for the circle is free and contractible. [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[F3] Homotopy-equivalent spaces have isomorphic real singular cohomology. [[cor-singular-cohomology-is-homotopy-invariant]]

[F4] The real singular cochain complex is dual to the real singular chain complex, and singular cohomology is its cocycle quotient. [[def-singular-cochain-complex-with-coefficients]] [[def-singular-cohomology-with-coefficients]]

[F5] The fundamental field for $e$ is the derivative of $[x]\mapsto[x-s]$ at $s=0$. [[def-fundamental-vector-field-of-a-left-action]]

[F6] Smooth differential forms on the circle are smooth sections of its exterior cotangent powers. [[def-smooth-differential-k-form]]

[F7] The period-one tangent generator exponentiates as $s\mapsto[s]$. [[def-standard-product-torus-as-a-compact-lie-group]]

## Proof

1.1 Define $\Phi([v,x])=v\cdot x$ from $ET\times_TT$ to $ET$, where $v\cdot x$ is the right Milnor action. It is well-defined because $\Phi([v\cdot h,x-h])=(v\cdot h)\cdot(x-h)=v\cdot x$. Its inverse is $v\mapsto[v,0]$: $\Phi([v,0])=v$, and the quotient relation gives $[v,x]=[v\cdot x,0]$. Both maps are continuous by the quotient topology and continuity of the group action, so this is a homeomorphism. By [F2], $ET$ is contractible; [F3] identifies its real singular cohomology with that of a point. [A1, F1, F2, F3, construct]

1.2 Integer translations preserve $dx$, so $-dx$ descends through the standard quotient charts to a global smooth one-form $\eta$ on the circle. The circle translations act transitively, so an invariant smooth function is constant. Every smooth one-form is $f(x)dx$ for a smooth periodic function $f$; invariance under all translations forces $f$ constant. Since higher forms vanish on a one-dimensional manifold, the invariant form algebra is spanned by $1$ and $\eta=-dx$. By [F7], the negative-exponential flow is $[x]\mapsto[x-s]$, hence $X_e=-\partial_x$ and $\iota_{X_e}\eta=1$; also $d\eta=0$. Substitution in [F1] gives $d_TP(u)=0$ and $d_T(P(u)\eta)=-uP(u)$. [F1, F5, F6, F7, given]

2.1 A point has one singular simplex in each dimension. If $\sigma_n$ is its unique $n$-simplex, then $\partial\sigma_0=0$; for $n\geq1$, $\partial\sigma_n=(\sum_{j=0}^n(-1)^j)\sigma_{n-1}$, whose coefficient is $1$ for even $n$ and $0$ for odd $n$. Thus $C^n(\{\ast\};\mathbb R)=\mathbb R$, and its coboundary $\delta^n$ is identity for odd $n$ and zero for even $n$. The cohomology quotient in [F4] is therefore $\mathbb R$ in degree zero and zero in every positive degree. Together with step 1.1 this proves the stated Borel cohomology. [F4, step 1.1, algebra]

3.1 Multiplication by $u$ is injective on $\mathbb R[u]$, so the differential from the odd summand $\mathbb R[u]\eta$ has zero kernel and image $u\mathbb R[u]$ in the even summand. Therefore Cartan cohomology is the quotient $\mathbb R[u]/u\mathbb R[u]\cong\mathbb R$ in degree zero and is zero in positive degrees, matching step 2.1. The constant polynomial $1$ survives, while every positive power $u^k$ is the boundary $-d_T(u^{k-1}\eta)$; no odd class survives. [step 2.1, step 1.2, algebra] ∎
