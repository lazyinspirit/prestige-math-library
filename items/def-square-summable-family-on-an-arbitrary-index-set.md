---
id: def-square-summable-family-on-an-arbitrary-index-set
kind: definition
title: Square-summable families on an arbitrary index set and the space $\ell^2(I)$
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-directed-set-and-net, def-net-convergence-and-cluster-point, thm-hausdorff-iff-net-limits-are-unique, def-extended-reals, lem-extended-reals-complete, def-finite-sum, def-complete-ordered-field, lem-sup-epsilon, def-complex-conjugate-real-imaginary-part-and-modulus, def-real-numbers, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini, lem-complex-conjugation-and-modulus-laws, thm-metric-hausdorff-separation, def-complex-metric-convergence-and-continuity, thm-of-square-roots]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, pp.48–49 and p.52"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Exercise 2.64, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Throughout, $\mathbb F$ is $\mathbb R$ or $\mathbb C$ and families are indexed by
an arbitrary set $I$, with no enumeration or countability assumed. Finite real lists use [[def-finite-sum]], and sums over finite subsets use [[def-finite-sum-in-a-commutative-monoid]] in the additive monoid of the scalar field. Disjoint splitting is [[lem-finite-sum-reindexing-and-fubini]], and scalar modulus estimates use [[lem-complex-conjugation-and-modulus-laws]]; all suprema and infima of real sets below are
taken in the complete ordered field $\mathbb R$
([[def-complete-ordered-field]]) or in $[0,+\infty]\subseteq\overline{\mathbb R}$
([[def-extended-reals]], [[lem-extended-reals-complete]]).

**Sums of nonnegative families.** Let $(c_i)_{i\in I}$ be a family of
nonnegative reals and let $\operatorname{Fin}(I)$ be the set of finite subsets of
$I$, ordered by inclusion. Define

$$\sum_{i\in I}c_i:=\sup\Bigl\{\sum_{i\in F}c_i \;:\; F\in\operatorname{Fin}(I)\Bigr\}\in[0,+\infty] .$$

The set of finite subsums is nonempty, since $\varnothing$ contributes the empty
sum $0$, so the supremum exists in $[0,+\infty]$; it is a real number exactly
when the finite subsums are bounded above in $\mathbb R$, and $+\infty$
otherwise. For finite $I$ the finite subsum at $I$ is the largest of all finite
subsums, because all terms are nonnegative, so the definition agrees with the
finite sum; in particular $\sum_{i\in I}c_i=0$ when every $c_i$ is $0$, and
$I=\varnothing$ gives the empty sum $0$.

**Splitting identity and small tails.** Fix a finite $F\subseteq I$. Every
finite $G\subseteq I$ splits as the disjoint union $(G\cap F)\cup(G\setminus F)$,
so $\sum_{i\in G}c_i=\sum_{i\in G\cap F}c_i+\sum_{i\in G\setminus F}c_i\le\sum_{i\in F}c_i+\sum_{i\in I\setminus F}c_i$;
conversely the finite $G$ with $F\subseteq G$ satisfy
$\sum_{i\in G}c_i=\sum_{i\in F}c_i+\sum_{i\in G\setminus F}c_i$. Taking suprema,
with the constant $\sum_{i\in F}c_i$ passing through the supremum,

$$\sum_{i\in I}c_i=\sum_{i\in F}c_i+\sum_{i\in I\setminus F}c_i . \qquad (1)$$

Consequently, if $S:=\sum_{i\in I}c_i$ is finite, then for every real
$\varepsilon>0$ there is a finite $F\subseteq I$ with
$\sum_{i\in I\setminus F}c_i<\varepsilon$: the finite subsums form a nonempty
bounded-above set with supremum $S$, so by the epsilon characterisation of the
supremum ([[lem-sup-epsilon]]) some finite $F$ has
$S-\varepsilon<\sum_{i\in F}c_i$, and (1) gives
$\sum_{i\in I\setminus F}c_i=S-\sum_{i\in F}c_i<\varepsilon$. Such an $F$ is
called a **tail-control set** for $\varepsilon$.

**Sums of scalar families.** Now let $(a_i)_{i\in I}$ be a family in $\mathbb F$
and put $s_F:=\sum_{i\in F}a_i$ for finite $F\subseteq I$. The set
$\operatorname{Fin}(I)$ with inclusion is a directed preorder: it is nonempty and
$F\cup G$ is a common upper bound of $F$ and $G$
([[def-directed-set-and-net]]). Hence $(s_F)_{F\in\operatorname{Fin}(I)}$ is a
net in $\mathbb F$, the **finite-subset net** of the family, and the family is
**summable** when this net converges
([[def-net-convergence-and-cluster-point]]). The scalar metric is the usual real metric or [[def-complex-metric-convergence-and-continuity]]. These metric spaces are Hausdorff by [[thm-metric-hausdorff-separation]]. A net in $\mathbb F$ has at most one limit
([[thm-hausdorff-iff-net-limits-are-unique]]), so for a summable family the
limit is unique and we write $\sum_{i\in I}a_i:=\lim_F s_F$ for it. The family is
**absolutely summable** when $\sum_{i\in I}|a_i|<+\infty$ in the sense above.

**Every absolutely summable family is summable, in ZF.** Assume
$S:=\sum_{i\in I}|a_i|$ is finite and put $S_F:=\sum_{i\in F}|a_i|$ for finite
$F$. For finite $F,G\subseteq I$ the triangle inequality for finite sums and the
fact that a finite subsum is at most the whole nonnegative sum give

$$|s_F-s_G|\le\sum_{i\in F\triangle G}|a_i|\le S-S_{F\cap G} . \qquad (2)$$

Now fix a real $\varepsilon>0$, let $F_0$ be a tail-control set for
$\varepsilon$, and let $F,G\supseteq F_0$ be finite. Then $F\cap G\supseteq F_0$,
so $S-S_{F\cap G}\le S-S_{F_0}<\varepsilon$ and (2) gives
$|s_F-s_G|<\varepsilon$.

First suppose $\mathbb F=\mathbb R$. For each finite $F$ define
$A_F:=\inf\{s_G : G\supseteq F\}$ and $B_F:=\sup\{s_G : G\supseteq F\}$ over
finite $G$. Both are real numbers, because $|s_G|\le S_G\le S$, so the two sets
are nonempty and bounded, and $A_F\le B_F$. If $H\supseteq F$ then
$A_H\ge A_F$ and $B_H\le B_F$. Let $L:=\sup_FA_F$ and $U:=\inf_FB_F$.
Since $A_F\le s_{F\cup H}\le B_H$ for all finite $F,H$, we get $L\le U$.
Moreover, the preceding estimate holds for every pair $F,G\supseteq F_0$;
taking the supremum over $F$ and the infimum over $G$ gives
$B_{F_0}-A_{F_0}\le\varepsilon$. Hence
$0\le U-L\le B_{F_0}-A_{F_0}\le\varepsilon$ for every $\varepsilon>0$, so
$L=U=:s$. If $F\supseteq F_0$, then both $s_F$ and $s$ lie in
$[A_{F_0},B_{F_0}]$, and therefore $|s_F-s|\le\varepsilon$.

If $\mathbb F=\mathbb C$, apply the real argument just proved to the families
$(\operatorname{Re}a_i)$ and $(\operatorname{Im}a_i)$. They are absolutely
summable because $|\operatorname{Re}a_i|,|\operatorname{Im}a_i|\le|a_i|$.
Their finite-subset nets converge to real numbers $r$ and $t$, respectively,
so $s_F\to r+it$ in $\mathbb C$. Thus every absolutely summable real or complex
family is summable. **No choice principle is used**: the construction uses only
two-sided suprema in $\mathbb R$.

**Linearity and absolute value.** If $(a_i)$ and $(b_i)$ are absolutely
summable and $\lambda\in\mathbb F$, then so are $(a_i+b_i)$ and
$(\lambda a_i)$, and

$$\sum_{i\in I}(a_i+b_i)=\sum_{i\in I}a_i+\sum_{i\in I}b_i,\qquad \sum_{i\in I}\lambda a_i=\lambda\sum_{i\in I}a_i,\qquad \Bigl|\sum_{i\in I}a_i\Bigr|\le\sum_{i\in I}|a_i| ,$$

because the corresponding identities hold for every finite subsum, both sides
are limits of the corresponding finite-subset nets, and addition, scalar
multiplication and the modulus are continuous. The splitting identity (1)
likewise passes to absolutely summable scalar families:
$\sum_{i\in I}a_i=\sum_{i\in F}a_i+\sum_{i\in I\setminus F}a_i$ for every finite
$F$, because finite subsums over sets containing $F$ converge to the left-hand
side and equal the finite sum over $F$ plus the finite subsum of the tail, whose
net converges to the tail sum.

**The finite-dimensional Cauchy-Schwarz inequality.** Let $(u_k)_{0\le k<m}$ and $(v_k)_{0\le k<m}$ be scalar lists, for $m\in\mathbb N$ and let $t\in\mathbb R$. Every term of
$\sum_{k<m}(|u_k|-t|v_k|)^2$ is nonnegative, so for all real $t$

$$0\le\sum_{k<m}|u_k|^2-2t\sum_{k<m}|u_k||v_k|+t^2\sum_{k<m}|v_k|^2 .$$

If $\sum_{k<m}|v_k|^2>0$, substituting
$t=\bigl(\sum_{k<m}|u_k||v_k|\bigr)/\bigl(\sum_{k<m}|v_k|^2\bigr)$ gives
$\bigl(\sum_{k<m}|u_k||v_k|\bigr)^2\le\bigl(\sum_{k<m}|u_k|^2\bigr)\bigl(\sum_{k<m}|v_k|^2\bigr)$;
if $\sum_{k<m}|v_k|^2=0$ then every $v_k=0$ and both sides are $0$. In either case
$\sum_{k<m}|u_k||v_k|\le\bigl(\sum_{k<m}|u_k|^2\bigr)^{1/2}\bigl(\sum_{k<m}|v_k|^2\bigr)^{1/2}$
after taking square roots, and applying the modulus inequality for finite sums
to $u_k\overline{v_k}$ also gives

$$\Bigl|\sum_{k<m}u_k\overline{v_k}\Bigr|\le\Bigl(\sum_{k<m}|u_k|^2\Bigr)^{1/2}\Bigl(\sum_{k<m}|v_k|^2\Bigr)^{1/2} . \qquad (3)$$

**The space $\ell^2(I)$.** For a family $a=(a_i)_{i\in I}$ in $\mathbb F$ define
$Q(a):=\sum_{i\in I}|a_i|^2$. If $Q(a)$ is finite, set $\|a\|_2:=\sqrt{Q(a)}$, using the nonnegative real square root of [[thm-of-square-roots]]; if $Q(a)=+\infty$, set $\|a\|_2:=+\infty$. This is a case definition, not exponentiation of an extended real. Let

$$\ell^2(I,\mathbb F):=\{\,a=(a_i)_{i\in I} : \|a\|_2<+\infty\,\}.$$

The set $\ell^2(I,\mathbb F)$ is a vector space over $\mathbb F$: it contains the
zero family, is closed under scalar multiplication because
$\|\lambda a\|_2=|\lambda|\,\|a\|_2$, and is closed under addition because (3)
applied to finite subsums gives $\|a+b\|_2\le\|a\|_2+\|b\|_2<+\infty$. The same
inequality is the triangle inequality for $\|\cdot\|_2$, which is moreover
nonnegative, vanishes only for the zero family (an arbitrary sum of nonnegative
terms with supremum $0$ has every term $0$) and satisfies
$\|\lambda a\|_2=|\lambda|\,\|a\|_2$; thus $\|\cdot\|_2$ is a norm on
$\ell^2(I,\mathbb F)$. Finally the **pairing**
$\langle a,b\rangle:=\sum_{i\in I}a_i\overline{b_i}$ is well defined on
$\ell^2(I,\mathbb F)\times\ell^2(I,\mathbb F)$, because
$|a_i\overline{b_i}|=|a_i||b_i|$ has finite nonnegative sum by (3); it is linear
in the first variable, conjugate symmetric, positive definite, and satisfies
$\langle a,a\rangle=\|a\|_2^2$, all by the corresponding finite identities and
the linearity of the sum. Consequently $\ell^2(I,\mathbb F)$ is an inner-product
space, and $e_i\in\ell^2(I,\mathbb F)$ denotes the family that is $1$ at $i$ and
$0$ elsewhere. **Nothing here asserts that $\ell^2(I,\mathbb F)$ is complete**;
that follows later, from an orthonormal basis of a Hilbert space.
