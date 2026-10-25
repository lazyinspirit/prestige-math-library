---
id: thm-hilbert-spaces-are-reflexive-by-riesz-representation
kind: theorem
title: "Hilbert spaces are reflexive by Riesz representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-inner-product-space, def-inner-product-norm, def-banach-space, def-dual-space-of-a-normed-space, def-reflexive-banach-space, thm-bounded-operator-space-is-banach, thm-infimum-property, lem-inf-epsilon, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, prop-pythagorean-parallelogram-and-polarisation-identities]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://web.archive.org/web/20210425204615if_/https://math.jhu.edu/~sire/brezis.pdf"
      locator: "Section 5.2, Theorem 5.5 and Remark 4, complete relevant proof, printed pp. 135--137"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Countable Choice. Every complete real or complex
inner-product space $H$, with its inner-product norm, is reflexive.

## Facts & Assumptions

[A1] Countable Choice selects one member from each countable family of nonempty sets ([[def-countable-choice]]).

[L1] The inner product is linear in its first argument and conjugate-linear in its second, and its norm is the square root of the diagonal pairing ([[def-inner-product-space]], [[def-inner-product-norm]]).

[L2] Cauchy--Schwarz bounds inner products by products of norms ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]), and the parallelogram identity holds ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

[L3] Nonempty real sets bounded below have infima, characterized by points arbitrarily close from above ([[thm-infimum-property]], [[lem-inf-epsilon]]).

[L4] Completeness for the inner-product norm is the Banach condition ([[def-banach-space]]). The continuous dual uses the operator norm ([[def-dual-space-of-a-normed-space]]) and is Banach because its scalar target is Banach ([[thm-bounded-operator-space-is-banach]]).

[L5] Reflexivity means surjectivity of the canonical evaluation map $J_H:H\to H^{**}$ ([[def-reflexive-banach-space]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and a complete real or complex inner-product space $H$.

1.1 Set up the Riesz representation problem. Let $\varphi\in H^*$. If $\varphi=0$, then $\varphi(x)=\langle x,0\rangle$ for every $x$. Suppose $\varphi\ne0$ and put $M=\{x\in H:\varphi(x)=1\}$. This is a nonempty closed affine set. The nonempty set of its norms is bounded below, so let $d=\inf_{x\in M}\|x\|$. Since $1=|\varphi(x)|\leq\|\varphi\|\|x\|$ on $M$, one has $d\geq1/\|\varphi\|>0$. [given, L1, L2, L3]

2.1 Select and control a norm-minimizing sequence. For every $n\geq1$, [L3] makes $M_n=\{x\in M:\|x\|<d+1/n\}$ nonempty. Use [A1] exactly here to select $y_n\in M_n$ for all $n$. Since $(y_n+y_m)/2\in M$, [L2] gives [A1, L2, L3, step 1.1, choose]

$$\|y_n-y_m\|^2\leq2(d+1/n)^2+2(d+1/m)^2-4d^2.$$

The right side tends to zero as $m,n\to\infty$, so $(y_n)$ is Cauchy.

3.1 Obtain the unique minimum. Completeness gives $y_n\to y\in H$. Continuity of $\varphi$ gives $\varphi(y)=1$, so $y\in M$, while norm continuity gives $\|y\|=d$. Thus $y$ realizes the positive minimum of the norm on $M$. [L4, step 1.1, step 2.1]

4.1 Derive Riesz representation with the linear-first convention. If $z\in\ker\varphi$, then $y+t z\in M$ for every scalar $t$, and minimality gives [L1, L2, step 3.1]

$$d^2\leq\|y+t z\|^2=d^2+2\operatorname{Re}\!\bigl(t\langle z,y\rangle\bigr)+|t|^2\|z\|^2.$$

If $\langle z,y\rangle\ne0$, choosing the scalar phase of a sufficiently small $t$ to make the middle term negative contradicts this inequality. Therefore $\langle z,y\rangle=0$. For arbitrary $x\in H$, the vector $z=x-\varphi(x)y$ lies in $\ker\varphi$, and linearity in the first argument now gives $\langle x,y\rangle=\varphi(x)\|y\|^2$. Hence

$$\varphi(x)=\langle x,R\varphi\rangle,\qquad R\varphi:=y/\|y\|^2.$$

Together with $R0=0$, this represents every functional. Uniqueness follows by evaluating the difference of two representing vectors at that same difference. Cauchy--Schwarz and the unit vector in the representing direction give $\|R\varphi\|=\|\varphi\|$.

5.1 Put the transported Hilbert structure on the dual. Define $C:H\to H^*$ by $(Cx)(u)=\langle u,x\rangle$. Step 4.1 says that $C$ is onto with inverse $R$, and [L1] shows that both are conjugate-linear in the complex case and linear in the real case. They are isometries. Define on $H^*$ [L1, L4, step 4.1, construct]

$$\langle\varphi,\psi\rangle_*:=\langle R\psi,R\varphi\rangle_H.$$

The reversed order and the two conjugate-linear occurrences make this inner product linear in $\varphi$, conjugate-linear in $\psi$, and positive definite; its norm is the existing dual norm. By [L4], $H^*$ is complete for that norm, so it too is a Hilbert space.

6.1 Identify every bidual functional with canonical evaluation. Apply the representation proved in steps 1.1--4.1 to the Hilbert space $H^*$. For $\Phi\in H^{**}$ there is $w\in H^*$ with $\Phi(\varphi)=\langle\varphi,w\rangle_*$ for every $\varphi\in H^*$. Put $x=Rw\in H$. Since $\varphi(u)=\langle u,R\varphi\rangle_H$, the definition in step 5.1 gives [L1, L5, step 4.1, step 5.1]

$$\Phi(\varphi)=\langle Rw,R\varphi\rangle_H=\langle x,R\varphi\rangle_H=\varphi(x)=(J_Hx)(\varphi).$$

Thus $\Phi=J_Hx$, so $J_H$ is surjective.

7.1 Conclude reflexivity and record all boundaries. [A1, L5, step 4.1, step 6.1] Surjectivity in step 6.1 is reflexivity by [L5]. If $H=\{0\}$, then both $H^*$ and $H^{**}$ are zero and the canonical map is onto. The zero functional was separated before division, while nonzero $\varphi$ gives $d>0$, so every quotient is defined. The real case has trivial conjugation; step 5.1 tracks both conjugations in the complex case. Countable Choice is used only to select the minimizing sequence in step 2.1 (and again when the same proved representation is applied to $H^*$), not for any basis or uncountable family. [A1, L5, step 4.1, step 6.1] ∎