---
id: def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality
kind: definition
title: Boolean algebra and Boolean ultrafilter
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-prime-and-maximal-ideals]
justified_by: []
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
    - title: "Marcus Tressl, Stone Duality for Boolean Algebras — Definition 2.2.13, Observation 2.2.14, Definition 2.3.1 and Characterization 2.3.3, pp. 7–9"
      url: "https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf"
---

## Definition

A **Boolean algebra** is a set $B$ with distinguished elements $0,1 \in B$,
binary operations $\wedge,\vee : B \times B \to B$ and a unary operation
$\neg : B \to B$, such that for all $a,b,c \in B$:

- $(B,\wedge,1)$ and $(B,\vee,0)$ are commutative monoids (associativity and the identities $a\wedge 1 = a$, $a \vee 0 = a$);
- the **absorption laws** hold: $a \wedge (a\vee b) = a$ and $a \vee (a \wedge b) = a$;
- the **distributive laws** hold: $a\wedge(b\vee c) = (a\wedge b)\vee(a\wedge c)$ and $a\vee(b\wedge c) = (a\vee b)\wedge(a\vee c)$;
- the **complement laws** hold: $a\wedge\neg a = 0$ and $a\vee\neg a = 1$.

The **trivial** Boolean algebra is the one-element algebra $\{0\}$, in which
$0 = 1$; it is allowed here, and it corresponds to the empty Stone space in
[[def-stone-space-and-clopen-algebra]].

A **Boolean homomorphism** $\varphi : B \to B'$ is a map with
$\varphi(0) = 0$, $\varphi(1) = 1$, $\varphi(a\wedge b) =
\varphi(a)\wedge\varphi(b)$, $\varphi(a\vee b) = \varphi(a)\vee\varphi(b)$ and
$\varphi(\neg a) = \neg\varphi(a)$ for all $a,b$.

A **proper filter** in $B$ is a subset $F \subseteq B$ with

1. $1 \in F$ and $0 \notin F$;
2. $a, b \in F$ implies $a \wedge b \in F$;
3. $a \in F$ and $a \le b$ (meaning $a \wedge b = a$) imply $b \in F$.

A **Boolean ultrafilter** is a proper filter that is maximal with respect to
inclusion among proper filters.

## The complement dichotomy and two-valued homomorphisms

The following two facts are used repeatedly below, and are proved here rather
than assumed. Let $U \subseteq B$ be a proper filter.

**Dichotomy.** $U$ is an ultrafilter if and only if for every $a \in B$ exactly
one of $a \in U$ and $\neg a \in U$ holds.

*If* $U$ is an ultrafilter and $a \notin U$, then $\neg a \in U$: if also
$\neg a \notin U$, the family $U' := \{b : b \ge a\wedge u$ for some $u \in U\}$
is a proper filter strictly containing $U$ — it is a filter by construction, it
contains $a$ and hence is strictly larger, and it is proper because
$a \wedge u \ne 0$ for every $u \in U$ (were $a \wedge u = 0$ then $u \le \neg a$
and $\neg a \in U$ by upward closure, contrary to assumption), so $0 \notin U'$;
this contradicts maximality. The two alternatives are exclusive because
$a \wedge \neg a = 0 \notin U$.

*Conversely*, suppose $U$ decides every element. If $U \subseteq V$ is a proper
filter and $a \in V$, then $\neg a \notin V$ (else $0 = a\wedge\neg a \in V$),
so $\neg a \notin U$ and hence $a \in U$ by the dichotomy applied to $U$; thus
$V \subseteq U$ and $V = U$, so $U$ is maximal.

**Two-valued homomorphisms.** The assignments
$U \mapsto \chi_U$, where $\chi_U(a) = 1$ for $a \in U$ and $\chi_U(a) = 0$
otherwise, and $\chi \mapsto \chi^{-1}(\{1\})$, are mutually inverse bijections
between Boolean ultrafilters on $B$ and Boolean homomorphisms $B \to \{0,1\}$
with the two-element Boolean algebra as codomain.

*That $\chi_U$ is a homomorphism* uses the dichotomy: $\chi_U(\neg a) =
1 - \chi_U(a)$ by exclusivity, $\chi_U(a \wedge b) = \chi_U(a)\chi_U(b)$ because
$U$ is closed under $\wedge$ and upward closed, and the identity for $\vee$
follows from de Morgan and the other two, or directly from the fact that
$a \vee b \in U$ if and only if $a \in U$ or $b \in U$ (if $a \vee b \in U$ and
both $a \notin U$ and $b \notin U$, then $\neg a, \neg b \in U$, so
$\neg(a\vee b) = \neg a \wedge \neg b \in U$, contradicting
$(a\vee b)\wedge\neg(a\vee b) = 0 \notin U$; the converse is upward closure).
*That $\chi^{-1}(\{1\})$ is an ultrafilter* is immediate from the homomorphism
identities: it is a proper filter, and it decides each element because
$\chi(a) \in \{0,1\}$ forces exactly one of $\chi(a) = 1$, $\chi(\neg a) = 1$.

## Remarks

- **Filters are proper by convention**, as for filters on a set; the improper
  family $B$ itself is not a filter here, so "ultrafilter" means a maximal
  *proper* filter.
- **The trivial algebra has no ultrafilters and no two-valued homomorphisms.**
  In the one-element algebra $0 = 1$, a proper filter would have to contain $1$
  and omit $0 = 1$, which is impossible; and a Boolean homomorphism to
  $\{0,1\}$ would have to send $1$ to $1$ and $0 = 1$ to $0$, which is also
  impossible. This matches the empty Stone space under the convention of
  [[def-stone-space-and-clopen-algebra]].
