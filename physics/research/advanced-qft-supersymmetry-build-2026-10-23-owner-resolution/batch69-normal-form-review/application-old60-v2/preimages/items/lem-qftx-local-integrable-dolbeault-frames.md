---
id: lem-qftx-local-integrable-dolbeault-frames
kind: lemma
title: Local holomorphic frames for an integrable smooth Dolbeault operator
status: draft
origin: session
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
deps:
  - lem-local-holder-cauchy-transform-estimate
  - lem-cauchy-transform-with-smooth-parameters
  - thm-holder-spaces-on-bounded-domains-are-banach-spaces
  - thm-banach-fixed-point
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-axiom-of-choice
dependency_roles:
  lem-local-holder-cauchy-transform-estimate: mathematical-premise
  lem-cauchy-transform-with-smooth-parameters: mathematical-premise
  thm-holder-spaces-on-bounded-domains-are-banach-spaces: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_base: ZF + AC inherited from the Cauchy parameter construction and Banach/Hölder suppliers
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Louis Koszul and Bernard Malgrange, Sur certaines structures fibrées complexes
      url: https://doi.org/10.1007/BF02287068
      locator: Arch.Math.9(1958),102–109; bibliographic attribution only, full text not retrieved. The local proof is reconstructed from the exact listed local Cauchy suppliers.
verification:
  precheck: pending
---

## Statement

Assume AC. Let $E$ be a smooth finite-rank complex vector bundle on a finite-dimensional complex manifold, and let $D''$ be a smooth complex-linear operator from its smooth sections to smooth $E$-valued $(0,1)$-forms satisfying $D''(fs)=\bar\partial f\otimes s+fD''s$. Extend it to bundle-valued forms by the graded Leibniz rule and suppose $(D'')^2=0$. Near every point there is a smooth invertible frame matrix $G$ with $D''G=0$. The changes between these frames are holomorphic, defining a unique holomorphic vector-bundle structure with Dolbeault operator $D''$. A smooth bundle map intertwines two such operators exactly when it is holomorphic for these structures. The construction is local and requires no projective GAGA, coherence or global vanishing theorem.

## Statement references

[[lem-local-holder-cauchy-transform-estimate]]

[[lem-cauchy-transform-with-smooth-parameters]]

[[thm-holder-spaces-on-bounded-domains-are-banach-spaces]]

[[thm-banach-fixed-point]]

[Koszul–Malgrange, bibliographic attribution](https://doi.org/10.1007/BF02287068)

## Facts & Assumptions

**Given:** The smooth operator, its square-zero condition, finite rank and AC.

[F1] The fixed-support Cauchy transform solves $\partial_{\bar w}Tq=q$ and maps compactly supported $C^{m,\alpha}$ data to $C^{m+1,\alpha}$ on every fixed disk with a finite bound. [[lem-local-holder-cauchy-transform-estimate]]

[F2] A cutoff Cauchy integral has smooth parameter dependence for smooth data and commutes with derivatives in untouched variables, preserving their holomorphy. [[lem-cauchy-transform-with-smooth-parameters]]

[F3] Hölder spaces on closed bounded coordinate disks are Banach spaces; a strict contraction on a complete metric space has a unique fixed point. [[thm-holder-spaces-on-bounded-domains-are-banach-spaces]], [[thm-banach-fixed-point]]

[F4] Holomorphic bundle structures are specified by local frames with holomorphic transition matrices. The relevant Cauchy and fixed-point suppliers inherit the stated AC assumption. [[def-complex-manifolds-and-holomorphic-vector-bundles]], [[def-axiom-of-choice]]

## Proof

**Given:** A smooth trivialization on a relatively compact coordinate polydisc, in which $D''=\bar\partial+\sum_j A_j\,d\bar z_j$.

1.1 First solve one equation with all other coordinates regarded as parameters $p$. Write $z_j=\rho w$ on a disk slightly larger than $|w|\le2$, choose a fixed smooth cutoff $\chi$ supported in $|w|<2$ and equal to one for $|w|\le1$, and put $a_\rho(w,p)=\rho A_j(\rho w,p)$. For fixed $0<\alpha<1$, its $C^\alpha_w$ norm is bounded uniformly on a compact parameter polydisc by $C\rho(M_0+\rho M_1)$, where $M_0,M_1$ bound $A_j$ and its first derivatives. Multiplication is bounded in the matrix Hölder norm by the product rule for increments, and [F1] bounds $K(p)u=T(\chi a_\rho u)$ on $C^\alpha(\overline D_2)$. Choose one positive $\rho$ making $\|K(p)\|<1/4$ for every parameter. By [F3], $g=1-K(p)g$ has a unique fixed point; $\|g-1\|\le\|K\|/(1-\|K\|)<1/3$, so $g$ is invertible everywhere. On $|w|<1$, [F1] gives $\partial_{\bar w}g=-a_\rho g$. [F1, F2, F3, construct]

2.1 The coefficients depend smoothly on parameters as maps into $C^\alpha_w$, since all their parameter derivatives have uniform bounds on compact subsets. The inverse $(1+K(p))^{-1}$ is the uniformly convergent Neumann series; the identity $L(p+h)-L(p)=-L(p+h)(K(p+h)-K(p))L(p)$ for $L=(1+K)^{-1}$ gives its first derivative in operator norm, and induction gives derivatives of every order. Hence $g=L(p)1$ is smoothly parameter-dependent in $C^\alpha_w$. For each such derivative, the fixed-point equation and [F1] gain one $w$ derivative; induction gives all mixed $C^{m,\alpha}_w$ derivatives on the same radius, because only the inverse in the initial $C^\alpha$ space needs smallness. Thus $g$ is jointly smooth. If $A_j$ is holomorphic in an untouched coordinate, $K$ has zero antiholomorphic parameter derivative by [F2], and differentiating the inverse identity gives the same for $g$. [F1, F2, F3, step 1.1, algebra]

3.1 Gauge by this $g$ on the smaller disk. The transformed coefficient is $A_i'=g^{-1}(\partial_{\bar z_i}g+A_i g)$, and $A_j'=0$. The square-zero condition in a smooth frame is $\partial_{\bar z_i}A_j-\partial_{\bar z_j}A_i+[A_i,A_j]=0$, and it is preserved by the gauge transformation by direct conjugation of $(D'')^2$. Therefore every remaining $A_i'$ is holomorphic in $z_j$. Kill the next coordinate by steps 1.1–2.1 with a cutoff only in that coordinate. Their holomorphic-parameter assertion preserves $A_j'=0$. Continue through the finitely many coordinates, shrinking the respective coordinate disks as needed. The product of the resulting smooth invertible gauges has all transformed coefficients zero, proving the required local frame. [F1, F2, step 1.1, step 2.1, algebra]

4.1 If $G$ and $H$ are two such frames, $D''G=D''H=0$ gives $\bar\partial(G^{-1}H)=0$. For smooth scalar functions this implies holomorphy: the one-variable Cauchy formula applies with the other variables fixed, and its iterated integral on a product of small circles gives a locally convergent joint power series. Thus the transition matrices are holomorphic, giving [F4]'s bundle structure; any other structure with the same $D''$ has the same class of holomorphic frames, hence agrees. In these frames an intertwining smooth bundle map has matrix $M$ with $\bar\partial M=0$, so is holomorphic by the same calculation, and the converse follows by the Leibniz rule. Rank zero is immediate and the finite gauge induction covers every positive finite rank. [F1, F2, F4, step 3.1, algebra] ∎
