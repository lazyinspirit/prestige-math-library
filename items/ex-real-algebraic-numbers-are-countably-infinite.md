---
id: ex-real-algebraic-numbers-are-countably-infinite
kind: example
title: "Real algebraic numbers are countably infinite, without choice"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [ex-explicit-enumeration-of-the-rationals,
       lem-finite-real-coefficient-lists-have-at-most-degree-many-roots,
       def-countable, def-equinumerous, def-injection-surjection-bijection,
       lem-subset-of-countable, lem-finite-subsets-listable,
       lem-countable-iff-surjection-from-n, lem-pigeonhole, thm-schroder-bernstein,
       thm-n-cross-n-countable, thm-r-uncountable, def-integers, def-int-operations,
       def-rationals, def-rat-operations, lem-rat-ops-well-defined,
       lem-int-embeds-rat, lem-nat-embeds-int, lem-of-q-embeds,
       def-complete-ordered-field, def-ordered-field, def-field, def-finite-sum,
       def-integer-power, thm-recursion, thm-induction-principle,
       thm-well-ordering-principle, def-natural-numbers, def-nat-order,
       thm-omega-is-peano-system, lem-nat-nonzero-is-successor,
       lem-nat-order-is-membership, lem-nat-transitive-irreflexive,
       def-function, def-axiom-schema-of-separation, def-axiom-schema-of-replacement]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I, Volume I (complete author-hosted textbook)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§1.4 Exercise 1.4.9(a)–(b), printed p. 43: complete definition, countability/transcendence exercise and real-root hint"
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§4.11, printed pp. 89–90: complete algebraic/transcendental discussion, real algebraicity by integer polynomial, countably many coefficient lists and finitely many roots; the source union argument is adapted to a canonical least-code/root-rank injection to avoid an unneeded countable-choice assumption"
---

## Example

Call $x \in \mathbb{R}$ **real algebraic** when

$$P(x) = \sum_{k=0}^{d} a_k x^k = 0$$

for some $d \in \mathbb{N}$ and some finite list of integers
$a_0, \dots, a_d$ with $a_d \ne 0$, the integers being embedded in
$\mathbb{R}$ along $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
([[def-integers]], [[def-rationals]], [[lem-int-embeds-rat]],
[[lem-of-q-embeds]], [[def-finite-sum]], [[def-integer-power]]). Let $A$ be the
set of real algebraic numbers. Then:

- **(i)** $A$ is countably infinite; an injection $A \to \mathbb{N}$ is specified
  below by the least integer-code of a coefficient list having $x$ as a root,
  paired with the position of $x$ in the increasing listing of that list's
  finite real root set;
- **(ii)** every rational number, embedded in $\mathbb{R}$, lies in $A$;
- **(iii)** $\mathbb{R} \setminus A$ is uncountable.

All of this is a theorem of ZF: the coding of valid coefficient lists is an explicit
surjection, the least code and the increasing root listing are canonical, and the
only enumerations used in (iii) are two existentially given surjections. No claim
about algebraic closures or complex algebraic numbers is made; the ambient field
here is $\mathbb{R}$.

## Facts & Assumptions

**Given:** $\mathbb{R}$ a complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]], [[def-field]]); the integers $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/{\sim}$ and the rationals $\mathbb{Q}$ ([[def-integers]], [[def-rationals]]); the embedding $\overline{k} := [(k,0)]$ of $\mathbb{N}$ in $\mathbb{Z}$ ([[lem-nat-embeds-int]]), the embedding $j : \mathbb{Z} \to \mathbb{Q}$ ([[lem-int-embeds-rat]]) and the unique injective order-preserving field homomorphism $\varepsilon : \mathbb{Q} \to \mathbb{R}$ ([[lem-of-q-embeds]]). Write $a^{*} := \varepsilon(j(a)) \in \mathbb{R}$ for the image of $a \in \mathbb{Z}$.

[F1] The coding: $J(m,n) = 2^m(2n+1) - 1$ is a bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$, and $z : \mathbb{N} \to \mathbb{Z}$, $z(u) = [(a,b)]$ where $(a,b) = J^{-1}(u)$, is a surjection onto $\mathbb{Z}$; both are given by explicit formulas ([[ex-explicit-enumeration-of-the-rationals]], [[thm-n-cross-n-countable]], [[def-integers]], [[def-injection-surjection-bijection]]).

[F2] Decoding: for $n \in \mathbb{N}$ write $J^{-1}(n) = (d, s)$; the recursion theorem gives the unique $T : \mathbb{N} \to \mathbb{N}$ with $T(0) = s$ and $T(\sigma(k)) = \pi_2(J^{-1}(T(k)))$, and with $U(k) := \pi_1(J^{-1}(T(k)))$ the decoded coefficients are $a_k := z(U(k))$ for $k \le d$ ([[thm-recursion]], [[def-function]]). The fallback is used when $a_d = 0$: the code then denotes the constant list $(1)$, whose polynomial has no zeros. This decoding is total: every $n$ produces a list $a_0, \dots, a_d$ ([[def-axiom-schema-of-separation]], [[def-axiom-schema-of-replacement]] for the sets of decoded values).

[F3] The local root bound: for $d \in \mathbb{N}$ and reals $b_0, \dots, b_d$ with $b_d \ne 0$, the zero set $\{\, x \in \mathbb{R} : \sum_{k=0}^{d} b_k x^k = 0 \,\}$ is finite of cardinality at most $d$ ([[lem-finite-real-coefficient-lists-have-at-most-degree-many-roots]]).

[F4] Finite subsets and listings: every nonempty finite subset of $\mathbb{R}$ has a maximum and a minimum ([[lem-finite-subsets-listable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); the order of $\mathbb{R}$ is a linear order, so it is total, antisymmetric and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

[F5] Cardinality language: $S \approx t$ means a bijection $S \to t$ exists, and $\approx$ is symmetric and transitive; a set is finite when it is equinumerous with some natural number, countably infinite when it is equinumerous with $\mathbb{N}$, and at most countable when it is one of the two ([[def-equinumerous]], [[def-countable]]); a finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]], claim 3); $\sigma$ is injective ([[thm-omega-is-peano-system]]); and $n \notin n$ for every $n \in \mathbb{N}$ ([[lem-nat-transitive-irreflexive]]).

[F6] For a nonempty set $S$: $S$ is at most countable if and only if there is a surjection $\mathbb{N} \to S$ ([[lem-countable-iff-surjection-from-n]]); and if $S_1 \preceq S_2$ and $S_2 \preceq S_1$ then $S_1 \approx S_2$ ([[thm-schroder-bernstein]], [[def-equinumerous]]). $\mathbb{R}$ admits no surjection from $\mathbb{N}$ ([[thm-r-uncountable]]).

[F7] Field arithmetic of the embeddings: $\varepsilon$ is a field homomorphism, so $\varepsilon(u + v) = \varepsilon(u) + \varepsilon(v)$, $\varepsilon(uv) = \varepsilon(u)\varepsilon(v)$, $\varepsilon(0) = 0$, $\varepsilon(1) = 1$, and it is injective; the operations on $\mathbb{Q}$ are well defined on classes, and for a representative $(p,v)$ of a rational $q$ one has $v \cdot q = p$ in $\mathbb{Q}$ ([[lem-of-q-embeds]], [[def-rat-operations]], [[lem-rat-ops-well-defined]], [[def-rationals]], [[def-field]]).

[F8] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); and every $n \ne 0$ is $\sigma(m)$ for some $m$ ([[lem-nat-nonzero-is-successor]]). Induction is [[thm-induction-principle]]; the successor map is an order-preserving bijection from $m$ onto $\sigma(m)\setminus\{0\}$ by [[lem-nat-order-is-membership]] and the Peano properties in [F5].

## Verification

**Proof technique:** direct.

1.1 The decoding is total and assigns to every $n$ a finite list of integers. For $n$, [F2] gives $d, s \in \mathbb{N}$ with $J^{-1}(n) = (d,s)$ and the sequences $T, U$; then $a_k = z(U(k))$ is an integer for each $k \le d$, so $(a_0, \dots, a_d)$ is a finite integer list. Define $P_n(x) := \sum_{k=0}^{d} a_k^{*} x^k$ when $a_d \ne 0$, and $P_n(x) := 1$ when $a_d = 0$; in both cases $P_n : \mathbb{R} \to \mathbb{R}$ is given by a finite sum of real powers, and $R_n := \{\, x \in \mathbb{R} : P_n(x) = 0 \,\}$ is a set by Separation. Finally $A := \{\, x \in \mathbb{R} : P_n(x) = 0 \text{ for some } n \in \mathbb{N} \,\}$ is a set by Separation; every element of this set is real algebraic, since a fallback code has no roots. The converse follows from the coefficient coding below. [F1, F2]

1.2 Unique increasing listings. For every finite $S\subseteq\mathbb{R}$ and its unique $m\in\mathbb{N}$ with $S\approx m$, there is exactly one increasing bijection $\ell:m\to S$. Prove this by induction on $m$. At $m=0$, $S=\varnothing$ and the empty function is the unique listing. At $m=\sigma(m')$, let $s=\min S$, which exists by [F4]. Transport $T=S\setminus\{s\}$ into a subset of $m$ using a bijection $S\to m$; [F4] makes $T$ finite, say $T\approx m''$. Extending a bijection $T\to m''$ by $s\mapsto m''$ gives $S\approx\sigma(m'')$, because $m''\notin m''$. Uniqueness of finite cardinality and successor injectivity give $m''=m'$ by [F5]. The induction hypothesis, including the empty case, gives an increasing bijection $\ell':m'\to T$. Define $\ell(0)=s$ and $\ell(\sigma(i))=\ell'(i)$ for $i\in m'$. By [F8] these clauses cover $\sigma(m')$; they give a bijection and preserve order because $s$ is strictly below every member of $T$ and successor preserves the index order. For uniqueness, any increasing bijection sends $0$ to $\min S$; deleting this value gives an increasing bijection $m'\to T$, unique by the induction hypothesis. [F4, F5, F8]

2.1 Every valid list is coded. Given integers $a_0,\dots,a_d$ with $a_d\ne0$, define $u_k:=\min\{u\in\mathbb{N}:z(u)=a_k\}$ for each $k\le d$. These sets are nonempty by [F1], and [F8] supplies unique least values, so the finite function $k\mapsto u_k$ is defined without choice. Form $t_{d+1}=0$ and $t_k=J(u_k,t_{k+1})$ backwards for $k=d,\dots,0$. To justify this finite recursion with a total self-map, carry a counter $j$ and an accumulator $v$, start at $(0,0)$, and send $(j,v)$ to $(\sigma(j),J(u_{d-j},v))$ when $j\le d$, leaving the state fixed when $j>d$. Recursion on $\mathbb{N}\times\mathbb{N}$ yields $(d+1,t_0)$ after $d+1$ steps. Put $n=J(d,t_0)$. Induction on $k\le d$ gives $T(k)=t_k$ and $U(k)=u_k$, so code $n$ has exactly the coefficients $a_k=z(u_k)$ and does not use the fallback. Thus every valid integer list occurs. Together with step 1.1 this identifies $A$ with the set of real algebraic numbers. The encoding is generally many-to-one, since different tails or integer representatives can decode to the same list. [step 1.1, F1, F2, F8]

2.2 For every $n \in \mathbb{N}$ the root set $R_n$ is finite, and if the decoded list has $a_d \ne 0$ then $R_n$ is equinumerous with some $m \le d$. In the fallback case $a_d = 0$ we have $P_n = 1$ and $R_n = \varnothing$. Otherwise $a_d^{*} \ne 0$, since the composite embedding $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ is injective and $a_d \ne 0$; the polynomial $P_n$ is exactly the evaluation of the real coefficient list $a_0^{*}, \dots, a_d^{*}$ with nonzero top coefficient, so [F3] applies and $R_n$ is finite of cardinality at most $d$. [step 1.1, F3, F7]

3.1 $A$ is at most countable. Every $x \in A$ lies in $R_n$ for some $n$, so the least such $n$ exists by [F8]; write $n(x) := \min\{\, n : P_n(x) = 0 \,\}$. Then $R_{n(x)}$ is finite by step 2.2 and nonempty, say $R_{n(x)} \approx m$ with $m \in \mathbb{N}$, and by step 1.2 it has a unique increasing listing $\ell_{n(x)} : m \to R_{n(x)}$; define $j(x) := \ell_{n(x)}^{-1}(x) \in m \subseteq \mathbb{N}$, the position of $x$ in that listing. Define $\varphi(x) := J(n(x), j(x)) \in \mathbb{N}$. Then $\varphi$ is injective: if $\varphi(x) = \varphi(x')$, injectivity of $J$ gives $n(x) = n(x') =: n$ and $j(x) = j(x') =: i$, and both $x$ and $x'$ are the value $\ell_n(i)$ of the same unique listing. Hence $\varphi$ is a bijection of $A$ onto the subset $\varphi[A] \subseteq \mathbb{N}$, and every subset of $\mathbb{N}$ is at most countable by [F4], so $A$ is at most countable. [step 1.2, step 2.2, F1, F4, F5, F8]

3.2 Every embedded rational lies in $A$. Let $q \in \mathbb{Q}$ and fix a representative $(p,v)$ with $v \ne 0$. Applying the construction of step 2.1 to the integer list $(a_0, a_1) := (-p, v)$, of degree $d = 1$ with $a_1 = v \ne 0$, produces a code $n$ whose decoded polynomial is $P(x) = (-p)^{*} + v^{*} x$. By [F7], $P(\varepsilon(q)) = \varepsilon(j(-p)) + \varepsilon(j(v))\varepsilon(q) = \varepsilon\bigl(j(-p) + j(v)q\bigr) = \varepsilon(0) = 0$, because $j(-p) + j(v)q = 0$ in $\mathbb{Q}$, that is $v \cdot q = p$. Hence $\varepsilon(q) \in A$. [step 2.1, F7]

4.1 $\mathbb{N} \preceq A$. The composite embedding $g : \mathbb{N} \to \mathbb{R}$, $g(m) := \varepsilon(j(\overline{m}))$, is injective, as a composite of injective maps; and $g(m) \in A$ for every $m$, since $g(m) = \varepsilon(q)$ for the rational $q = j(\overline{m})$ by step 3.2. So $g$ is an injection $\mathbb{N} \to A$. [step 3.2, F5, F7]

5.1 By step 3.1 there is an injection $A \to \mathbb{N}$, and by step 4.1 there is an injection $\mathbb{N} \to A$; Schröder-Bernstein gives $A \approx \mathbb{N}$, so $A$ is countably infinite. [step 3.1, step 4.1, F5, F6]

6.1 $\mathbb{R} \setminus A$ is uncountable. Suppose it were at most countable. If $\mathbb{R} \setminus A = \varnothing$ then $\mathbb{R} = A \approx \mathbb{N}$ by step 5.1, contradicting [F6]. Otherwise $\mathbb{R} \setminus A$ is nonempty, so by [F6] fix a surjection $s : \mathbb{N} \to \mathbb{R} \setminus A$; by step 5.1 fix a bijection $f : \mathbb{N} \to A$. Define $t : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ by $t(0, k) := f(k)$ and $t(\sigma(i), k) := s(k)$; every real is in $A$ or in $\mathbb{R} \setminus A$, elements of $A$ are values $f(k)$, and elements of $\mathbb{R} \setminus A$ are values $s(k) = t(\sigma(0), k)$, so $t$ is onto. Composing $t$ with the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ inverse to $J$ gives a surjection $\mathbb{N} \to \mathbb{R}$, contradicting [F6]. Hence $\mathbb{R} \setminus A$ is uncountable. [step 5.1, F1, F6]

7.1 Collecting the results: $A$ is countably infinite by step 5.1, every embedded rational lies in $A$ by step 3.2, and $\mathbb{R} \setminus A$ is uncountable by step 6.1. The injection of step 3.1 is the least-code-and-root-rank map $x \mapsto J(n(x), j(x))$, and the only selections made anywhere are least elements of nonempty sets of naturals and the unique increasing listings of finite root sets, so the argument is a theorem of ZF. [step 3.2, step 5.1, step 6.1] ∎

## Remarks

- The role of the local root bound [[lem-finite-real-coefficient-lists-have-at-most-degree-many-roots]] is exactly to make each coded list have a *finite* root set, so that the increasing listing and the position $j(x)$ exist. Without it the least-code map would still be defined but its injectivity argument would have no canonical second coordinate.

- The fallback clause at a top coefficient $a_d = 0$ keeps the decoding total: every natural number is a code, possibly of the constant polynomial $1$, which has no roots. Invalid codes therefore contribute nothing to $A$, while every genuine list appears by step 2.1.

- No completion or algebraic-closure operation is used, and no claim is made about complex roots: the field in play is $\mathbb{R}$ and the roots counted are real roots only. This is the convention of the source exercise, which concerns real coefficient lists.
