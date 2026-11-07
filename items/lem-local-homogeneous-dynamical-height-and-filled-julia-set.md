---
dependency_level: 2
id: lem-local-homogeneous-dynamical-height-and-filled-julia-set
kind: lemma
title: "Local homogeneous dynamical height and its filled Julia set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-multiplicative-absolute-value-on-a-field
  - lem-binary-form-resultant-bezout-identities
  - thm-reals-cauchy-complete
  - def-good-and-potential-good-reduction-rational-map
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, \u00a73.1 and \u00a73.3, local-height and filled-Julia formulas"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Let $L$ be any nonarchimedean absolutely valued field and let $F=(F_1,F_2)$ be a homogeneous degree-$d$ binary map with $d\ge2$ and $R_F\ne0$. Set $\|z\|=\max(|z_1|,|z_2|)$. For $z\ne0$ the limit
$$H_F(z)=\lim_{n\to\infty}d^{-n}\log\|F^{\circ n}(z)\|$$
exists. There is $C\ge0$, independent of $z$, with $|H_F(z)-\log\|z\||\le C$, and convergence is uniform for $z\ne0$. One has $H_F(F(z))=dH_F(z)$, $H_F(az)=H_F(z)+\log|a|$ for $a\ne0$, and
$$K_F:=\{z:\{\|F^{\circ n}(z)\|:n\ge0\}\text{ is bounded}\}=\{0\}\cup\{z\ne0:H_F(z)\le0\}.$$
If $F$ has good reduction, then $\|F(z)\|=\|z\|^d$, $H_F(z)=\log\|z\|$, and $K_F=\{z:\|z\|\le1\}$. Completeness or algebraic closedness of $L$ is unnecessary.

## Statement references

[[def-multiplicative-absolute-value-on-a-field]]

[[def-good-and-potential-good-reduction-rational-map]]

## Facts & Assumptions

**Given:** The valued field and nondegenerate homogeneous map in the statement.

[F1] There are degree-$(d-1)$ forms $A_X,B_X,A_Y,B_Y$ with $A_XF_1+B_XF_2=R_FX^{2d-1}$ and $A_YF_1+B_YF_2=R_FY^{2d-1}$. They can be taken as columns of the adjugate of the Sylvester matrix. ([[lem-binary-form-resultant-bezout-identities]])

[F2] Real Cauchy sequences converge. ([[thm-reals-cauchy-complete]])

[F3] Good reduction means integral coefficients and unit resultant. ([[def-good-and-potential-good-reduction-rational-map]])

## Proof

1.1 Let $B$ be the maximum absolute value of the coefficients of $F_1,F_2$, and let $A>0$ bound the absolute values of the coefficients of the four forms in [F1]. The ultrametric inequality and homogeneity give $\|F(z)\|\le B\|z\|^d$. Applying the identity in [F1] for a coordinate of maximum absolute value gives $|R_F|\|z\|^{2d-1}\le A\|z\|^{d-1}\|F(z)\|$. Thus $b\|z\|^d\le\|F(z)\|\le B\|z\|^d$ with $b=|R_F|/A>0$. In particular no nonzero iterate is zero. With $D=\max(|\log b|,|\log B|)$, it follows that $|\log\|F(z)\|-d\log\|z\||\le D$. [F1, algebra]

1.2 Put $u_n(z)=d^{-n}\log\|F^{\circ n}(z)\|$. Step 1.1 gives $|u_{n+1}(z)-u_n(z)|\le Dd^{-n-1}$, and hence $|u_r(z)-u_s(z)|\le Dd^{-s}/(d-1)$ for $r>s$. This bound is independent of $z$, tends to zero, and proves existence by [F2], uniform convergence, and $|H_F(z)-\log\|z\||\le C:=D/(d-1)$. Shifting the limit proves $H_F(F(z))=dH_F(z)$. Since $F^{\circ n}(az)=a^{d^n}F^{\circ n}(z)$, taking limits proves logarithmic homogeneity. [F2, step 1.1, algebra]

2.1 If the orbit norms of $z$ are bounded by $T>0$, then $u_n(z)\le d^{-n}\log T$, so $H_F(z)\le0$. Conversely if $H_F(z)\le0$, the bound of step 1.2 applied at $F^{\circ n}(z)$ gives $\log\|F^{\circ n}(z)\|\le H_F(F^{\circ n}(z))+C=d^nH_F(z)+C\le C$. Thus the orbit is bounded. The zero vector has a constant orbit and is included separately. [step 1.2, algebra]

3.1 Under good reduction, all Sylvester entries have absolute value at most $1$, and every adjugate entry is a sum of signed products of these entries. Thus the four forms in [F1] have coefficients of absolute value at most $1$. The inequalities of step 1.1 can therefore use $A=B=|R_F|=1$, giving $\|F(z)\|=\|z\|^d$. Iteration, the limit, and step 2.1 give all three remaining claims. [F1, F3, step 1.1, step 2.1, algebra] ∎
