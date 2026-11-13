---
id: lem-se-author-ccbb64dfef2c-simultaneous-flat-reflection
kind: lemma
domain: mathematics
title: One flat reflection with simultaneous Lq and W1q bounds
status: published
deps:
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:thm-wkp-extension-from-a-half-space
  - math:thm-linear-change-of-variables-for-lebesgue-measure
  - math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:thm-wkp-extension-from-a-half-space: mathematical-premise
  math:thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Assume AC. Let $n\ge1$ be an integer, $1<q<\infty$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Write $x=(y,t)\in\mathbb R^{n-1}\times\mathbb R$ and $H_+=\mathbb R^{n-1}\times(0,\infty)$. Define one map $R:L^q(H_+;\mathbb K)\to L^q(\mathbb R^n;\mathbb K)$ by
$$(Rf)(y,t)=f(y,|t|)\quad(t\ne0),\qquad (Rf)(y,0)=0.$$
It is independent of representatives, linear, restricts to $f$ almost everywhere on $H_+$, and satisfies
$$\|Rf\|_{L^q(\mathbb R^n)}=2^{1/q}\|f\|_{L^q(H_+)}.$$
The same $R$ maps $W^{1,q}(H_+;\mathbb K)$ into $W^{1,q}(\mathbb R^n;\mathbb K)$ and satisfies
$$\|Rf\|_{W^{1,q}(\mathbb R^n)}=2^{1/q}\|f\|_{W^{1,q}(H_+)},\qquad \|u\|_{W^{1,q}}^q=\|u\|_{L^q}^q+\sum_{j=1}^{n}\|\partial_{x_j}u\|_{L^q}^q.$$

The compact-cylinder assertion is an almost-everywhere vanishing assertion: for any compact $K\subset\mathbb R^{n-1}$ and $a>0$, set $C_+=K\times[0,a]$ and $C=K\times[-a,a]$. If $f=0$ almost everywhere on $H_+\setminus C_+$, then $Rf=0$ almost everywhere on $\mathbb R^n\setminus C$. For $n=1$, $\mathbb R^0$ is the one-point space and the same conventions apply.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]. Its countable instances supply the choice hypotheses of the Sobolev conventions and change-of-variables inputs below; the imported half-space theorem uses AC through its ACL, one-dimensional absolutely continuous and Fubini inputs. The reflection formula itself is explicit.

[F2] [[math:def-sobolev-space-wkp-and-its-norm]] defines real and complex almost-everywhere Sobolev classes, with the component $\ell^q$-sum norm displayed in the Statement.

[F3] [[math:thm-wkp-extension-from-a-half-space]] applies with $k=1$, $p=q$ and coefficient $a_1=1$. Its candidate derivatives and interface cancellation (Proof, steps 2.1 and 3.2) give the tangential even and normal odd weak derivatives of this reflection, without imposing zero boundary values on $f$.

[F4] [[math:thm-linear-change-of-variables-for-lebesgue-measure]] implies that the linear involution $S(y,t)=(y,-t)$ preserves Lebesgue measurability and null sets, since $|\det S|=1$. Its singular-map clause also makes $\{t=0\}$ null: this hyperplane is the image of the singular linear map $(y,t)\mapsto(y,0)$.

[F5] [[math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] applies to the $C^1$ diffeomorphism $S:H_-\to H_+$, where $H_-=\mathbb R^{n-1}\times(-\infty,0)$, with $|\det DS|=1$. For any nonnegative Lebesgue measurable $g$ on $H_+$ it gives $\int_{H_-}g(y,-t)\,dy\,dt=\int_{H_+}g(y,t)\,dy\,dt$.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove all stated conclusions for the single reflection map $R$.

1.1 By [F4], composition with $S$ on $H_-$ preserves measurability and carries the null exceptional set for equality of two representatives to a null set. The prescribed zero values on $\{t=0\}$ introduce no ambiguity, since that hyperplane is null. Hence the formula defines a class independent of representatives and is linear; its restriction to $H_+$ is $f$. Apply [F5] with $g=|f|^q$ and split the integral over the two half-spaces, obtaining $\int_{\mathbb R^n}|Rf|^q=2\int_{H_+}|f|^q$. This proves both membership in $L^q$ and the exact norm identity, before any differentiability is assumed. [F1, F2, F4, F5, given]

2.1 Suppose $f=0$ almost everywhere outside $C_+$ in $H_+$, and let $N\subset H_+\setminus C_+$ be its null exceptional set. On the upper half-space outside $C$ the reflected function vanishes except on $N$, and on the lower half-space outside $C$ it vanishes except on $S(N)$. By [F4] the latter set is null as well, so the asserted almost-everywhere vanishing outside $C$ follows. This is invariant under changing representatives. If $K$ is contained in an open chart base $B$ and $a<b$, then $C$ is a compact subset of the larger doubled cylinder $B\times(-b,b)$, so lateral and top margins are retained. [F4, step 1.1, given]

3.1 For $f\in W^{1,q}(H_+;\mathbb K)$, [F3] identifies the same formula with the $k=1$ half-space extension. Its weak tangential derivatives are $(\partial_{y_j}f)(y,|t|)$ for $1\le j\le n-1$, and its weak normal derivative is $\operatorname{sgn}(t)(\partial_tf)(y,|t|)$ away from the null hyperplane. The supplier's interface cancellation proves these identities on all of $\mathbb R^n$; the two zeroth-order traces match, so no surface term remains. Apply the integral calculation of step 1.1 to each derivative class, whose reflected modulus is unchanged by the normal sign. Each derivative's $q$th power norm doubles. Summing these identities with the identity for $f$ using [F2] proves the exact $W^{1,q}$ norm identity for this same $R$. When $n=1$ the tangential list is empty. [F1, F2, F3, F5, step 1.1] ∎
