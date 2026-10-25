---
id: thm-local-irreducible-decomposition-hypersurface-germ
kind: theorem
title: "Finite unique irreducible components of a hypersurface germ"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-irreducible-and-prime-elements-in-a-domain
  - def-irreducible-hypersurface-germ
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-unique-factorisation-domain
  - lem-irreducible-holomorphic-germ-is-prime
  - lem-square-free-reduction-of-holomorphic-germ
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-units-in-the-holomorphic-germ-ring
  - thm-holomorphic-germ-ring-is-a-ufd
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Proposition 6.7.3 finite irreducible decomposition of a hypervariety germ (p. 194); §6.4 unique factorisation (p. 182); §6.6 defining equations (p. 188)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (2.10) factoriality of O_n (p. 82); II (4.21) prime vanishing ideals (p. 96); II (6.6) irreducible factors and components (pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge1$, let $p\in\mathbb C^n$ and let $f\in\mathcal O_{\mathbb C^n,p}$ be a
reduced nonzero nonunit germ, with zero germ $X=(Z(f),p)$
([[def-reduced-holomorphic-germ-for-hypersurface]],
[[def-complex-analytic-hypersurface-germ-and-reduced-equation]]). Then:

1. $f$ is a unit multiple of a product of pairwise nonassociate irreducible
   germs, $f=u\,q_1\cdots q_r$ with $r\ge1$, and the union of their zero germs
   is $X$:
   $$X=\bigcup_{i=1}^{r}\bigl(Z(q_i),p\bigr).$$
2. Each $Z(q_i)$ is an irreducible hypersurface germ
   ([[def-irreducible-hypersurface-germ]]), the germs $Z(q_i)$ are pairwise
   distinct and none contains another, and they are exactly the irreducible
   components of $X$: a hypersurface subgerm $Y\subseteq X$ is irreducible if
   and only if $Y=Z(q_i)$ for some $i$.
3. The components and their number are determined by $X$: if
   $X=\bigcup_{s=1}^{s_0}Y_s$ is any finite union of pairwise distinct
   irreducible hypersurface germs, then $s_0=r$ and
   $\{Y_1,\dots,Y_{s_0}\}=\{Z(q_1),\dots,Z(q_r)\}$ as sets of germs. In
   particular the multiset of associate classes of $q_1,\dots,q_r$ depends only
   on $X$.

## Facts & Assumptions

**Given:** A reduced nonzero nonunit germ $f$ at $p\in\mathbb C^n$, its zero germ $X=Z(f)$, and the vanishing ideal $I_p(X)$.

[F1] $f$ is reduced, and a nonzero nonunit of the UFD $\mathcal O_{\mathbb C^n,p}$ has a factorisation $u\,q_1^{e_1}\cdots q_r^{e_r}$ into pairwise nonassociate irreducibles which is unique up to order and associates; it is reduced exactly when all exponents equal $1$ ([[def-reduced-holomorphic-germ-for-hypersurface]], [[thm-holomorphic-germ-ring-is-a-ufd]], [[def-unique-factorisation-domain]]).

[F2] A hypersurface germ is a nonempty proper set germ $Z(g)$ for a nonzero nonunit $g$; every hypersurface subgerm of $X$ may be written $Z(g)$ with $g$ reduced, and reducibility of a hypersurface germ is the existence of a cover by two proper hypersurface subgerms, with irreducible components the maximal irreducible hypersurface subgerms ([[def-complex-analytic-hypersurface-germ-and-reduced-equation]], [[def-irreducible-hypersurface-germ]]).

[F3] For a reduced nonzero nonunit $h$ one has $I_p(Z(h))=(h)$; for an arbitrary nonzero nonunit $g$ one has $I_p(Z(g))=(g_{\mathrm{red}})$ ([[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]], [[lem-square-free-reduction-of-holomorphic-germ]]).

[F4] Every irreducible element of the holomorphic germ ring is prime: $q\mid ab$ implies $q\mid a$ or $q\mid b$ ([[lem-irreducible-holomorphic-germ-is-prime]], [[def-irreducible-and-prime-elements-in-a-domain]]).

[F5] A germ is a unit exactly when its value at $p$ is nonzero, so a unit has no zeros near $p$ and is not divisible by any irreducible germ; a product of nonunits is a nonunit ([[prop-units-in-the-holomorphic-germ-ring]], [[def-irreducible-and-prime-elements-in-a-domain]]).

[F6] The germ ring is an integral domain, so a product $ab$ vanishes at a point exactly when $a$ or $b$ does, and cancellations $ac=bc$ with $c\ne0$ are allowed ([[thm-holomorphic-germ-ring-is-a-ufd]], [[def-unique-factorisation-domain]]).



**Proof technique:** direct — factor the reduced equation, prove each prime factor is an irreducible component, then classify all irreducible subgerms by the vanishing-ideal lemma and primality.

## Proof
1.1 By [F1] and reducedness of $f=(f_{\mathrm{red}})$, write $f=u\,q_1\cdots q_r$ with $u$ a unit, $r\ge1$ and $q_1,\dots,q_r$ pairwise nonassociate irreducibles. Since a product of complex values vanishes exactly when one factor vanishes and $u$ has no zero near $p$ by [F5], the zero sets agree: $X=Z(f)=\bigcup_{i=1}^{r}Z(q_i)$. [given, F1, F5, F6]

2.1 Each $q_i$ is reduced: if $q_i$ were divisible by the square of an irreducible germ, say $q_i=\rho^2h=\rho\cdot(\rho h)$, then both factors $\rho$ and $\rho h$ would be nonunits by [F5], contradicting irreducibility of $q_i$ in [F1]. Consequently $I_p(Z(q_i))=(q_i)$ by [F3]. [step 1.1, F1, F3, F5]

3.1 Each $Z(q_i)$ is irreducible. Suppose $Z(q_i)=Z(g_1)\cup Z(g_2)$ with hypersurface subgerms $Z(g_j)\subsetneq Z(q_i)$, the $g_j$ taken reduced by [F2]. Then $g_1g_2$ vanishes on $Z(q_i)$, so $g_1g_2\in I_p(Z(q_i))=(q_i)$ by step 2.1 and [F3], that is, $q_i\mid g_1g_2$. By primality of $q_i$ in [F4] we get $q_i\mid g_1$ or $q_i\mid g_2$, say $g_1=q_ih$; then $Z(q_i)\subseteq Z(g_1)$, so $Z(g_1)=Z(q_i)$, contradicting that $Z(g_1)$ is a proper subgerm. Hence $Z(q_i)$ admits no such cover and is irreducible. [step 2.1, F2, F3, F4]

3.2 The germs $Z(q_1),\dots,Z(q_r)$ are pairwise incomparable. If $Z(q_i)\subseteq Z(q_j)$ with $i\ne j$, then $q_j$ vanishes on $Z(q_i)$, so by [F3] and step 2.1 we have $q_j\in I_p(Z(q_i))=(q_i)$, that is, $q_i\mid q_j$. Since $q_j$ is irreducible, the other factor in $q_j=q_i h$ must be a unit; hence $q_i$ and $q_j$ are associates, contradicting their pairwise nonassociateness in step 1.1. [step 1.1, step 2.1, F3, F5]

4.1 For every subset $J\subseteq\{1,\dots,r\}$, every irreducible hypersurface subgerm $Y\subseteq\bigcup_{j\in J}Z(q_j)$ equals $Z(q_j)$ for some $j\in J$. Write $Y=Z(g)$ with $g$ reduced by [F2]. The product $\prod_{j\in J}q_j$ vanishes on $Y$, so it lies in $I_p(Z(g))=(g)$ by [F3], and $g$ divides that product. Factoring $g$ into irreducibles, each factor divides some $q_j$ by primality [F4], hence is associate to that irreducible $q_j$; since $g$ is reduced, $g$ is a unit multiple of $\prod_{j\in J_0}q_j$ for a nonempty subset $J_0\subseteq J$. Thus $Y=\bigcup_{j\in J_0}Z(q_j)$. If $|J_0|\ge2$, choose $j_0\in J_0$ and put $K=J_0\setminus\{j_0\}$, which is nonempty. Then $Y=Z(q_{j_0})\cup Z(\prod_{j\in K}q_j)$. Both terms are hypersurface subgerms of $Y$ and both are proper: equality of either with $Y$ would, by [F3], make its reduced defining equation associate to $g$, although $g$ has distinct irreducible factors indexed by all of $J_0$. This contradicts irreducibility of $Y$ [F2]. Hence $|J_0|=1$ and $Y=Z(q_{j_0})$. [step 1.1, step 3.1, step 3.2, F1, F2, F3, F4]

5.1 Taking $J=\{1,\dots,r\}$ in step 4.1 and using step 1.1, a hypersurface subgerm $Y\subseteq X$ is irreducible if and only if $Y=Z(q_i)$ for some $i$: one direction is step 4.1 and the other is step 3.1. The germs are pairwise incomparable by step 3.2, so each is maximal among the irreducible subgerms of $X$; hence they are exactly the irreducible components in the sense of [F2]. [step 1.1, step 3.1, step 3.2, step 4.1, F2]

5.2 Suppose $X=\bigcup_{s=1}^{s_0}Y_s$ with the $Y_s$ pairwise distinct irreducible hypersurface germs. Applying step 4.1 to each $Y_s\subseteq X$ shows that $Y_s=Z(q_{j(s)})$ for some index $j(s)$, and distinctness makes $s\mapsto j(s)$ injective. Conversely, each $Z(q_i)\subseteq X=\bigcup_s Z(q_{j(s)})$, so step 4.1 applied to this union gives $Z(q_i)=Z(q_{j(s)})$ for some $s$; pairwise incomparability in step 3.2 gives $j(s)=i$. Thus $s\mapsto j(s)$ is a bijection, $s_0=r$, and the two sets of germs agree. [step 4.1, step 3.2, F2]

6.1 Each component $Z(q_i)$ determines its reduced defining germ up to a unit ([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]), so the multiset of associate classes of $q_1,\dots,q_r$ depends only on $X$. Steps 1.1, 5.1 and 5.2 prove all three assertions. [step 1.1, step 5.1, step 5.2] ∎
