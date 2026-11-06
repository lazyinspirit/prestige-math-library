---
id: lem-cft-opposite-vertex-operator-identities
kind: lemma
title: Opposite fields under formal coordinate inversion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-locality-to-jacobi-residue-calculus
  - def-conformal-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-vertex-algebra-module
dependency_roles:
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part I, equations (2.57)–(2.67) and Lemma 2.22"
      url: https://arxiv.org/pdf/1012.4193v7
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type and $M$ a grading-restricted generalized $V$-module. Put $A(x)=e^{xL(1)}(-x^{-2})^{L(0)}$ on $V$ and $Y^o(v,x)=Y_M(A(x)v,x^{-1})$. This is an upper-truncated field on each vector of $M$, has vacuum $Y^o(\mathbf1,x)=1$, and satisfies
$$x_0^{-1}\delta\left(\frac{x_1-x_2}{x_0}\right)Y^o(v,x_2)Y^o(u,x_1)-x_0^{-1}\delta\left(\frac{x_2-x_1}{-x_0}\right)Y^o(u,x_1)Y^o(v,x_2)=x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right)Y^o(Y(u,x_0)v,x_2).$$
The delta expansions have the same binomial convention as ordinary module Jacobi; the order of the two operators in each product is reversed. Moreover,
$$\frac{d}{dx}Y^o(v,x)=Y^o(L(-1)v,x),\qquad [Y^o(v,x),L_M(-j)]=\sum_{k=0}^{j+1}\binom{j+1}{k}x^kY^o(L(j-k)v,x)\quad(j=-1,0,1).$$
For $v\in V_d$, writing $Y^o(v,x)=\sum_n v_n^o x^{-n-1}$ gives
$$v_n^o=(-1)^d\sum_{r\geq0}\frac{(L(1)^rv)^M_{2d-r-n-2}}{r!},\qquad v_n^o M_{[h]}\subset M_{[h+n+1-d]}.$$
The sum over $r$ is finite. Finally $A(x^{-1})A(x)=1$.

## Statement references

[[def-conformal-vertex-algebra]]

[[def-grading-restricted-generalized-vertex-module]]

[[def-vertex-algebra-module]]

## Facts & Assumptions

**Given:** The module, grading and formal binomial conventions in the statement.

[F1] [[def-conformal-vertex-algebra]] supplies $[L(i),L(j)]=(i-j)L(i+j)$ for $i,j=-1,0,1$, the nonnegative integral grading, and translation $L(-1)$.

[F2] [[def-vertex-algebra-module]] supplies lower truncation, vacuum and module Jacobi. Its residues with the conformal vector give the Virasoro brackets, $Y_M(L(-1)v,t)=\partial_tY_M(v,t)$, and $[L_M(j),Y_M(v,t)]=\sum_{k=0}^{j+1}\binom{j+1}{k}t^kY_M(L(j-k)v,t)$ for $j=-1,0,1$.

[F3] [[def-grading-restricted-generalized-vertex-module]] supplies the restricted dual $M'=\bigoplus_h M_{[h]}^*$ as a vector space of separating functionals, before any action on that space is asserted.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] supplies regular-module Jacobi for the state fields on $V$, $Y(L(-1)u,t)=\partial_tY(u,t)$, and its coefficientwise commutator/residue identities under the stated ordinary CFT-type hypotheses. Step 1.2 uses this exact local interface. F2 supplies Jacobi on $M$; F4 supplies the regular-module identity on $V$.

## Proof

1.1 Since $L(1)$ lowers weight, $L(1)^rv=0$ for $r>d$ when $v\in V_d$. Expanding the finite exponential gives the displayed mode formula. The usual weight commutator $[L_M(0),a_m^M]=(\mathrm{wt}(a)-m-1)a_m^M$, obtained by taking the $L_M(0)$ residue of module Jacobi, shows that every summand has weight shift $n+1-d$. It holds on generalized eigenspaces too, since $(L_M(0)-h-\mathrm{wt}(a)+m+1)^Na_m^Mw=a_m^M(L_M(0)-h)^Nw$. Module truncation makes $v_n^ow=0$ for sufficiently negative $n$. The vacuum assertion follows from $A(x)\mathbf1=\mathbf1$. [given, F1, F2, F3, algebra]

1.2 We first establish the required change of coordinates on the algebra $V$, using the regular-module input F4. Take the conformal-vector commutator residue of its Jacobi identity and then $\operatorname{Res}_z z^{j+1}$, for $j=0,1$. Since $L(j)=\operatorname{Res}_z z^{j+1}Y(\omega,z)$, the binomial expansion gives $$[L(j),Y(u,t)]=\sum_{i=0}^{j+1}\binom{j+1}{i}t^{j+1-i}Y(\omega_{(i)}u,t).$$ Here $\omega_{(i)}=L(i-1)$ and $Y(L(-1)u,t)=\partial_tY(u,t)$ by F4. Thus the two state-field brackets are explicitly $[L(0),Y(u,t)]=Y(L(0)u,t)+t\partial_tY(u,t)$ and $[L(1),Y(u,t)]=Y(L(1)u,t)+2tY(L(0)u,t)+t^2\partial_tY(u,t)$. The $L(0)$ bracket gives $b^{L(0)}Y(u,t)b^{-L(0)}=Y(b^{L(0)}u,bt)$. The $L(1)$ bracket gives $$e^{aL(1)}Y(u,t)e^{-aL(1)}=Y\left(e^{a(1-at)L(1)}(1-at)^{-2L(0)}u,\frac{t}{1-at}\right).$$ To check the second identity without an extra covariance assumption, differentiate both sides in $a$ and use $[L(1),Y(u,t)]=Y(L(1)u,t)+2tY(L(0)u,t)+t^2\partial_tY(u,t)$; the chain rule gives the same differential equation and both sides equal $Y(u,t)$ at $a=0$. Equality follows recursively in powers of $a$ over characteristic zero. All substitutions are in the indicated binomial expansion; local nilpotence makes the state exponential finite. Apply these identities with $a=s$, $b=-s^{-2}$ and $t=x_0$, and then put $x_1=s+x_0$, expanded in nonnegative powers of $x_0$. They give the exact iterate identity $$A(s)Y(u,x_0)v=Y\left(A(s+x_0)u,-\frac{x_0}{s(s+x_0)}\right)A(s)v.$$ Indeed the transformed coordinate is $(-x_0/s^2)/(1+x_0/s)$ and the transformed state is $e^{(s+x_0)L(1)}(-(s+x_0)^{-2})^{L(0)}u$. [F1, F4, algebra]

1.3 Directly from the three $\mathfrak{sl}_2$ brackets, writing $A=A(x)$, one has $$L(-1)A=-A(x^2L(-1)+2xL(0)+L(1)),\quad L(0)A=A(L(0)+x^{-1}L(1)),\quad L(1)A=-x^{-2}AL(1).$$ For example $e^{-xL(1)}L(-1)e^{xL(1)}=L(-1)-2xL(0)+x^2L(1)$; the other two follow by the same finite commutator expansion. Differentiation gives $A'=A(-2x^{-1}L(0)-x^{-2}L(1))=AL(-1)+x^{-2}L(-1)A$. Consequently the chain rule and translation give $\partial_xY_M(Av,x^{-1})=Y_M(AL(-1)v,x^{-1})$. This proves the derivative identity. [F1, F2, algebra]

2.1 Here is the formal expansion argument needed to apply that identity to Jacobi. For homogeneous $a,b,m,\lambda$ with $\lambda\in M'$, module Jacobi implies that the two scalar products and the scalar iterate are expansions of one element of $\mathbb C[t_1^{\pm1},t_2^{\pm1},(t_1-t_2)^{-1}]$. To see the finiteness assertion, choose $N$ with $a_kb=0$ for $k\geq N$. The commutator residue of Jacobi, multiplied by $(t_1-t_2)^N$, gives equality of the two product expansions. Truncation on $m$ bounds the negative $t_2$ exponents in the first product and the negative $t_1$ exponents in the second. The weight shift in step 1.1 fixes their sum, so the common series after multiplication has both exponents bounded below and hence only finitely many terms. Thus it is a Laurent polynomial. The iterate expansion of that rational function follows by multiplying Jacobi by the same power and taking the $t_1$ residue after $t_1=t_2+t_0$; choose an additional power of $t_1$ to permit that substitution on $m$, using truncation. Cancelling these powers in the corresponding Laurent-series fields gives the asserted iterate. General inputs are finite sums of homogeneous ones. Generalized weights cause no change: a mode has its exact generalized-weight shift, and the restricted functional selects that weight. [F2, F3, step 1.1, algebra]

3.1 Apply step 2.1 to every term in the finite states $A(x_1)u,A(x_2)v$ and substitute $t_i=x_i^{-1}$. The resulting rational function $G(x_1,x_2)$ has poles only at $x_1=0,x_2=0,x_1=x_2$. Its expansion in nonnegative powers of $x_2/x_1$ is $\langle\lambda,Y^o(v,x_2)Y^o(u,x_1)m\rangle$: inversion reverses the radial order. Its other product expansion is the opposite ordering. In the iterate expansion put $x_1=x_2+x_0$. Step 1.2, with $s=x_2$, identifies its inner state, because $t_1-t_2=-x_0/(x_1x_2)$, so the iterate is precisely $\langle\lambda,Y^o(Y(u,x_0)v,x_2)m\rangle$. These are formal binomial substitutions, not an assertion of analytic convergence. [F2, F3, step 1.2, step 2.1, algebra]

4.1 For any rational $G$ with these poles, its two product expansions and its iterate expansion satisfy the displayed delta identity. One can verify this formal distribution rule by linearity on $x_1^p x_2^q(x_1-x_2)^r$, $p,q,r\in\mathbb Z$: first use the basic identity $$x_0^{-1}\delta\left(\frac{x_1-x_2}{x_0}\right)-x_0^{-1}\delta\left(\frac{x_2-x_1}{-x_0}\right)=x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right),$$ whose coefficients are the binomial expansions of $(x_1-x_2)^k$, and then multiply the three terms by their respective expansions of the monomial. On delta support the factors $(x_1-x_2)^r$ and $x_1^p$ can respectively be replaced by $x_0^r$ and $(x_2+x_0)^p$. Negative powers are expanded in the designated second variable, which is exactly the iterate convention. Every rational $G$ is a finite linear combination of these monomials after expanding its polynomial numerator. Apply this rule to step 3.1. The separating functionals in $M'$ give opposite Jacobi coefficientwise on $M$. [F3, step 3.1, algebra]

5.1 Substitute the three operator identities of step 1.3 into $$[Y^o(v,x),L_M(j)]=-\sum_{k=0}^{j+1}\binom{j+1}{k}x^{-k}Y_M(L(j-k)Av,x^{-1}).$$ For $j=1,0,-1$ the state expressions reduce respectively to $AL(-1)v$, $A(L(0)+xL(-1))v$, and $A(L(1)+2xL(0)+x^2L(-1))v$. These are exactly the three asserted opposite brackets. Finally scaling gives $(-x^2)^{L(0)}e^{xL(1)}(-x^2)^{-L(0)}=e^{-x^{-1}L(1)}$; hence $A(x^{-1})A(x)=e^{x^{-1}L(1)}e^{-x^{-1}L(1)}=1$, because the two integral-weight scaling factors multiply to one. [F1, F2, step 1.3, algebra] ∎

## Local supplier status

The state-field covariance calculation uses the actual local regular-Jacobi supplier F4. The proof is coefficientwise and formal; it asserts no analytic convergence. The independent generic HLZ convergence/coherence obligations remain separate. Source integration alone does not certify native review or gate acceptance.
