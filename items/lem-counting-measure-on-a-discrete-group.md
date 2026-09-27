---
id: lem-counting-measure-on-a-discrete-group
kind: lemma
title: "Counting measure on a discrete group is Haar, Haar measures there are its multiples, and integrals against them are sums"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-counting-measure, prop-counting-measure-is-a-measure, def-measure, def-standard-topologies, def-borel-sigma-algebra, def-extended-real-valued-measurable-function, def-compact-space, def-left-haar-integral-and-left-haar-measure, def-radon-measure-on-an-lch-space, def-nonnegative-simple-measurable-function, def-integral-of-a-nonnegative-simple-function, lem-well-definedness-of-the-simple-integral, def-nonnegative-lebesgue-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-square-summable-family-on-an-arbitrary-index-set, lem-finite-sum-reindexing-and-fubini, def-integrable-real-and-complex-functions-and-their-integrals, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31D, printed pp. 119–121 (identity iff discrete)"
    - title: "Anthony W. Knapp, Advanced Real Analysis, VI §2"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf"
      locator: "VI §2, printed pp. 225–230, Lemmas 6.9–6.13"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be an LCH group whose topology is discrete, let $\#_G$ be the counting
set function on the subsets of $G$ ([[def-counting-measure]]), and let
$\sum_{y\in G}$ be the sum of
[[def-square-summable-family-on-an-arbitrary-index-set]]. Then:

1. $\#_G$ is a left Haar measure and a right Haar measure on $G$.
2. Every left Haar measure $\mu$ on $G$ satisfies $\mu(E)=c\,\#_G(E)$ for every
   $E\subseteq G$, with $c:=\mu(\{e\})>0$; this $c$ is unique.
3. For every $H:G\to[0,+\infty)$ one has $\int_GH\,d\mu=c\sum_{y\in G}H(y)$,
   and every $\mu$-integrable complex $H$ satisfies
   $\int_GH\,d\mu=c\sum_{y\in G}H(y)$ together with
   $\sum_{y\in G}|H(y)|<+\infty$.

## Facts & Assumptions
**Given:** An LCH group $G$ whose topology is discrete, and a left Haar measure
$\mu$ on $G$.

[F1] The discrete topology on $G$ is the power set $\mathcal P(G)$, so every
subset of $G$ is open and closed; hence the Borel $\sigma$-algebra of $G$ is
$\mathcal P(G)$ and every function on $G$ is Borel measurable
([[def-standard-topologies]], [[def-borel-sigma-algebra]],
[[def-extended-real-valued-measurable-function]]).

[F2] A space is compact when every open cover has a finite subcover
([[def-compact-space]]).

[F3] The counting set function satisfies $\#_G(E)=|E|$ for finite $E$ and
$\#_G(E)=+\infty$ for infinite $E$, and it is a measure on $(G,\mathcal P(G))$;
hence it vanishes at $\varnothing$, is additive over disjoint unions and is
monotone under inclusion, and a bijection of $G$ carries a set to a set of the
same counting measure ([[def-counting-measure]],
[[prop-counting-measure-is-a-measure]], [[def-measure]]).

[F4] A left Haar measure is a nonzero Borel measure on $G$ that is left
invariant, finite on compact sets, outer regular on Borel sets and inner
regular on open sets; a right Haar measure is the same with right translations
in place of left ones ([[def-left-haar-integral-and-left-haar-measure]],
[[def-radon-measure-on-an-lch-space]]).

[F5] A nonnegative simple measurable function is a measurable finite-valued
function $G\to[0,+\infty)$ with finite range; pairwise disjoint Borel sets
$E_1,\dots,E_m$ with coefficients $a_j\ge0$ and
$s=\sum_{j=1}^ma_j\chi_{E_j}$ form a simple representation of $s$, the simple
integral is $\sum_{j=1}^ma_j\nu(E_j)$ under the convention
$0\cdot(+\infty)=0$, and its value is independent of the representation
([[def-nonnegative-simple-measurable-function]],
[[def-integral-of-a-nonnegative-simple-function]],
[[lem-well-definedness-of-the-simple-integral]]).

[F6] The nonnegative Lebesgue integral of a measurable $H\ge0$ is the supremum
of the simple integrals of its nonnegative simple minorants, and equals the
simple integral when $H$ itself is simple ([[def-nonnegative-lebesgue-integral]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F7] For a nonnegative family $(d_y)_{y\in G}$ the sum $\sum_{y\in G}d_y$ is the
supremum of its finite subsums; a scalar family is absolutely summable when this
sum of moduli is finite, absolutely summable families are summable with a
$\mathbb C$-linear sum, and
$\bigl|\sum_{y\in G}a_y\bigr|\le\sum_{y\in G}|a_y|$
([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F8] Finite sums over a commutative monoid are invariant under a bijective
reindexing of the finite index set and split over a disjoint decomposition of
that set ([[lem-finite-sum-reindexing-and-fubini]]).

[F9] A complex function $H=u+iv$ with $u=\operatorname{Re}H$,
$v=\operatorname{Im}H$ is $\mu$-integrable exactly when
$\int_G|H|\,d\mu<+\infty$, and then
$\int_GH\,d\mu=\int_Gu\,d\mu+i\int_Gv\,d\mu$ while
$\int_Gu\,d\mu=\int_Gu^+\,d\mu-\int_Gu^-\,d\mu$
([[def-integrable-real-and-complex-functions-and-their-integrals]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

1.1 $\#_G$ is a Borel measure: by [F1] every subset of $G$ is Borel, so $\mathcal P(G)$ is the Borel $\sigma$-algebra of $G$ and the measure of [F3] is defined on it. [F1, F3]

1.2 Invariance. For $a\in G$ the translations $x\mapsto ax$ and $x\mapsto xa$ are bijections of $G$, with inverses $y\mapsto a^{-1}y$ and $y\mapsto ya^{-1}$, so by [F3] they preserve the counting measure: $\#_G(aE)=\#_G(E)=\#_G(Ea)$ for every $E\subseteq G$. [F3]

1.3 Compact subsets are finite. Let $K\subseteq G$ be compact; its singletons are open by [F1] and form an open cover of $K$, so [F2] provides finitely many of them that cover $K$, and $K$ is finite. [F1, F2]

1.4 Equal mass of singletons. Put $d:=\mu(\{e\})$. For $x\in G$ left invariance and finite additivity give $\mu(\{x\})=\mu(x\{e\})=\mu(\{e\})=d$, and for finite $F\subseteq G$ therefore $\mu(F)=\sum_{x\in F}\mu(\{x\})=|F|\,d$. [F3, F4, given]

2.1 Compact finiteness and regularity of $\#_G$. A compact $K$ is finite by step 1.3, so $\#_G(K)=|K|<+\infty$ by [F3]; every subset $E$ is open by [F1] and is an admissible open superset of itself, so monotonicity in [F3] makes the infimum in the outer regularity condition equal to $\#_G(E)$; and for open $U$, step 1.3 makes the compact subsets of $U$ exactly its finite subsets, with $\sup\{|F|:F\subseteq U\text{ finite}\}=\#_G(U)$, since that supremum is $|U|$ when $U$ is finite, attained at $F=U$, and $+\infty$ when $U$ is infinite, an infinite set containing a subset of each finite cardinality by induction on the size (a set containing a subset of $n$ elements and being infinite has a further element). [F1, F3, step 1.3]

2.2 $d>0$. If $d=0$, then step 1.4 gives $\mu(F)=0$ for every finite $F$; compact sets are finite by step 1.3, so inner regularity [F4] gives $\mu(U)=\sup\{\mu(K):K\subseteq U\text{ compact}\}=0$ for every open $U$; since every subset is open by [F1], $\mu$ would vanish identically, contradicting its nonzeroness in [F4]. [F1, F4, step 1.3, step 1.4]

3.1 Clause 1. $\#_G(\{e\})=1$, so $\#_G$ is nonzero, and step 1.1, step 1.2 and step 2.1 verify every requirement of a left Haar measure listed in [F4]; the same invariance gives right invariance, so $\#_G$ is a right Haar measure as well. [F3, F4, step 1.1, step 1.2, step 2.1]

3.2 Clause 2. For every $E\subseteq G$ the set $E$ is open by [F1], so inner regularity [F4] with step 1.3, step 1.4 and step 2.1 gives $\mu(E)=\sup\{\mu(K):K\subseteq E\text{ compact}\}=\sup\{|K|\,d:K\subseteq E\text{ finite}\}=d\cdot\#_G(E)$, the last equality by the computation of step 2.1 and by $d>0$ from step 2.2, which lets $d$ be pulled out of the supremum, both sides being $+\infty$ for infinite $E$; and if also $\mu=c'\,\#_G$ with $c'>0$, then evaluation at $\{e\}$ gives $c'=c'\#_G(\{e\})=\mu(\{e\})=d$, so the constant $c=d$ is unique. [F1, F3, F4, step 1.3, step 1.4, step 2.1, step 2.2]

3.3 Finite sums of a simple function. Let $s=\sum_{j=1}^ma_j\chi_{E_j}$ be a simple representation and let $F\subseteq G$ be finite. Pairwise disjointness gives $s(y)=\sum_{j:y\in E_j}a_j$ for $y\in F$, so [F8] yields $\sum_{y\in F}s(y)=\sum_{j=1}^ma_j|E_j\cap F|$, which is at most $\sum_{j=1}^ma_j\#_G(E_j)$ by [F3]; conversely, choosing for each $j$ a finite subset of $E_j$ of size $\min(n,\#_G(E_j))$, possible by the induction in step 2.1, gives a finite $F$ with $\sum_{y\in F}s(y)=\sum_{j=1}^ma_j\min(n,\#_G(E_j))$, whose supremum over $n$ is $\sum_{j=1}^ma_j\#_G(E_j)$. Hence $\sum_{y\in G}s(y)=\sum_{j=1}^ma_j\#_G(E_j)$. [F3, F7, F8, step 2.1]

4.1 Lower bound. Let $H:G\to[0,+\infty)$ and let $F\subseteq G$ be finite. The function $H\chi_F=\sum_{y\in F}H(y)\chi_{\{y\}}$ is nonnegative simple, because it is finite-valued with finite range and the singletons are Borel by [F1]; its simple integral against $\mu$ is $\sum_{y\in F}H(y)\mu(\{y\})=c\sum_{y\in F}H(y)$ by [F5] and step 3.2. Since $H\chi_F\le H$, [F6] gives $\int_GH\,d\mu\ge c\sum_{y\in F}H(y)$ for every finite $F$, and the supremum over $F$ with [F7] gives $\int_GH\,d\mu\ge c\sum_{y\in G}H(y)$. [F1, F5, F6, F7, step 3.2]

4.2 Upper bound. Let $s\le H$ be a nonnegative simple minorant. By [F5], step 3.2 and step 3.3 its simple integral is $\sum_{j=1}^ma_j\mu(E_j)=\sum_{j=1}^ma_j\,c\,\#_G(E_j)=c\sum_{j=1}^ma_j\#_G(E_j)=c\sum_{y\in G}s(y)$, finite sums of nonnegative extended reals being rescaled by the positive constant $c$; and $\sum_{y\in G}s(y)\le\sum_{y\in G}H(y)$, because $s\le H$ compares all finite subsums termwise. So every simple minorant of $H$ has simple integral at most $c\sum_{y\in G}H(y)$, and [F6] gives $\int_GH\,d\mu\le c\sum_{y\in G}H(y)$. [F5, F6, F7, step 3.2, step 3.3]

5.1 Clause 3, first half. Step 4.1 and step 4.2 give $\int_GH\,d\mu=c\sum_{y\in G}H(y)$ for every $H:G\to[0,+\infty)$. [step 4.1, step 4.2]

6.1 Clause 3, second half, and conclusion. Let $H=u+iv$ be $\mu$-integrable. Then $|H|$ is finite-valued nonnegative with $\int_G|H|\,d\mu<+\infty$ by [F9], so step 5.1 gives $\sum_{y\in G}|H(y)|=c^{-1}\int_G|H|\,d\mu<+\infty$ and hence absolute summability of $(H(y))_{y\in G}$ by [F7]; the four functions $u^+,u^-,v^+,v^-$ are finite-valued nonnegative with sums bounded by $\sum_{y\in G}|H(y)|$, so they are summable as well, and [F7] with $H=u^+-u^-+i(v^+-v^-)$ gives $\sum_{y\in G}H(y)=\sum_{y\in G}u^+-\sum_{y\in G}u^-+i\bigl(\sum_{y\in G}v^+-\sum_{y\in G}v^-\bigr)$. Using [F9] for the integral and step 5.1 for each of the four parts, $\int_GH\,d\mu=\bigl(\int_Gu^+\,d\mu-\int_Gu^-\,d\mu\bigr)+i\bigl(\int_Gv^+\,d\mu-\int_Gv^-\,d\mu\bigr)=c\bigl(\sum_{y\in G}u^+-\sum_{y\in G}u^-+i\bigl(\sum_{y\in G}v^+-\sum_{y\in G}v^-\bigr)\bigr)=c\sum_{y\in G}H(y)$, the second half of clause 3, which completes the proof. ∎ [F7, F9, step 5.1]

## Remarks

- **Choice cost.** The argument is choice-free. The compactness-to-finiteness step uses the finite subcover of one explicitly given cover, the subsets of prescribed finite size are produced by induction rather than by selection, and the suprema are taken in $[0,+\infty]$. In particular the general uniqueness theorem for Haar measures, which assumes AC, is not used here: on a discrete group the proportionality constant is pinned to $\mu(\{e\})$.
- **Finite-valued integrands.** Clause 3 is stated for $H:G\to[0,+\infty)$, which covers every integrand used on this page; the value $+\infty$ is excluded because the simple minorants in step 4.1 and step 4.2 would then need the truncation convention of the extended nonnegative integral.
- **Reading the clauses.** Clause 2 identifies a left Haar measure on a discrete group as $c\cdot\text{counting}$ with $c=\mu(\{e\})$, and clause 3 turns integrals against it into the corresponding absolutely convergent sums; both are used by the discrete cases of the unimodularity and convolution items on this page.
