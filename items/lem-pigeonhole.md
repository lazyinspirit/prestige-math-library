---
id: lem-pigeonhole
kind: lemma
title: "The pigeonhole principle on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle,
       lem-nat-order-is-membership, lem-nat-trichotomy,
       lem-nat-nonzero-is-successor, lem-nat-transitive-irreflexive,
       def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [def-cardinal]
aliases: [lem-pigeonhole-principle, pigeonhole-principle]
landmark: true
short: "no injection $\\sigma(n)\\to n$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 (Cardinality of sets)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{N}$ be the von Neumann naturals, with $0 = \varnothing$ and
$\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and let $<$ be the order of
[[def-nat-order]], so that $m < n \iff m \in n$ and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ ([[lem-nat-order-is-membership]]).
Write $\approx$ for equinumerosity ([[def-equinumerous]]). Then:

1. for every $n \in \mathbb{N}$ there is **no injection** $\sigma(n) \to n$;
2. if $m < n$ then there is no injection $n \to m$;
3. if $n \approx m$ with $n, m \in \mathbb{N}$, then $n = m$;
4. $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$;
5. no natural number is equinumerous with a proper subset of itself: if
   $A \subseteq n$ and $n \approx A$, then $A = n$.

Claim 1 is the pigeonhole principle in its sharpest form, that $n + 1$ pigeons do
not fit injectively into $n$ holes; the other four are the consequences the
library actually quotes. Claim 3 says a finite set is equinumerous with exactly
one natural number, so "the number of elements" is well defined. Claim 4 says
$\mathbb{N}$ is infinite. Claim 5 says no natural number is Dedekind-infinite.

**Why this is proved here.** The next item on this page defines finiteness as
equinumerosity with a natural number, and the three size classes it introduces
are exhaustive by construction but mutually exclusive only because of claim 4.
Several later items also need claim 3 or claim 5. The principle is elementary and
belongs with the naturals, but it is about counting rather than about order, so
it is proved here, immediately before finiteness is defined, from induction and
the identification of the order with membership alone. Nothing below uses
ordinals, cardinals, or any later material.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, and $\mathbb{N}$ closed under $\sigma$, since it is an inductive set ([[def-natural-numbers]]); the order $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ and $m < n \iff (m \le n$ and $m \ne n)$ ([[def-nat-order]]); and $A \approx B$ meaning that a bijection $A \to B$ exists ([[def-equinumerous]]).

[L1] Induction: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] On $\mathbb{N}$ the order is membership ([[lem-nat-order-is-membership]]): $\mathbb{N}$ is a transitive set, so every element of a natural number is again a natural number; $m < n \iff m \in n$; $m \le n \iff m \subseteq n$; and consequently $n = \{\, m \in \mathbb{N} : m < n \,\}$.

[L3] Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

[L4] Trichotomy: for all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]).

[L5] Every natural number $n \ne 0$ equals $\sigma(m)$ for some $m \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

[L6] Maps ([[def-injection-surjection-bijection]]): $f$ is injective when $f(x) = f(y)$ forces $x = y$, and bijective when it is injective and surjective, so every bijection is an injection; a composite of two injections is an injection, a composite of two bijections is a bijection, and a bijection has a two sided inverse which is again a bijection. Two immediate consequences of the definition of injectivity are used below: the restriction of an injection to a subset of its domain is an injection, injectivity being a condition on pairs of points of the domain; and a map whose values all lie in a subset $C$ of its codomain may be read as a map into $C$, without affecting injectivity.

## Proof

**Proof technique:** direct.

1.1 Transpositions. For a set $X$ and $a, b \in X$ define $\tau^{X}_{a,b} : X \to X$ by $\tau^{X}_{a,b}(a) = b$, $\tau^{X}_{a,b}(b) = a$, and $\tau^{X}_{a,b}(x) = x$ for $x \notin \{a, b\}$; the clauses agree where they overlap (if $a = b$ all three read $a \mapsto a$, so the map is the identity), so this is a well defined function, and $\tau^{X}_{a,b} \circ \tau^{X}_{a,b} = \mathrm{id}_X$, whence $\tau^{X}_{a,b}$ is a bijection of $X$ onto itself. It carries $X \setminus \{a\}$ onto $X \setminus \{b\}$: when $a = b$ this is the identity statement, and when $a \ne b$ the elements of $X \setminus \{a\}$ are $b$, sent to $a$, together with the $x \notin \{a, b\}$, each fixed, so the image is $\{a\} \cup (X \setminus \{a, b\}) = X \setminus \{b\}$. [construct]

1.2 Base case of claim 1. Here $\sigma(0) = 0 \cup \{0\} = \{0\}$ and $0 = \varnothing$, so a function $f : \sigma(0) \to 0$ would have to supply a value $f(0) \in \varnothing$, and $\varnothing$ has no elements; hence there is no function $\sigma(0) \to 0$ at all, injective or not. [given]

1.3 Inductive step, hypotheses. Fix $n \in \mathbb{N}$, assume there is no injection $\sigma(n) \to n$, and suppose towards a contradiction that some $f : \sigma(\sigma(n)) \to \sigma(n)$ is injective. Note $\sigma(\sigma(n)) = \sigma(n) \cup \{\sigma(n)\}$, so $\sigma(n) \subseteq \sigma(\sigma(n))$ and $\sigma(n) \in \sigma(\sigma(n))$; note also $n \in \sigma(n)$. [assume-hyp, given]

2.1 Normalising $f$ at the top point. Put $a = f(\sigma(n))$, an element of $\sigma(n)$ because $\sigma(n)$ is the codomain of $f$, and let $\tau = \tau^{\sigma(n)}_{a,n}$, which is legitimate since $a$ and $n$ both lie in $\sigma(n)$. Then $f' = \tau \circ f : \sigma(\sigma(n)) \to \sigma(n)$ is a composite of an injection with a bijection, hence injective, and $f'(\sigma(n)) = \tau(a) = n$. [step 1.1, step 1.3, L6]

2.2 Every $k \in \sigma(n)$ satisfies $k \ne \sigma(n)$: were $k = \sigma(n)$ we would have $\sigma(n) \in \sigma(n)$, and no natural number is a member of itself, $\sigma(n)$ included, since $\mathbb{N}$ is closed under $\sigma$. [step 1.3, L3, given]

3.1 Let $k \in \sigma(n)$. Then $k \in \sigma(\sigma(n))$, so $f'(k)$ is defined; and $k \ne \sigma(n)$, so injectivity of $f'$ gives $f'(k) \ne f'(\sigma(n)) = n$. Since $f'(k) \in \sigma(n) = n \cup \{n\}$, this forces $f'(k) \in n$. Hence the restriction of $f'$ to $\sigma(n)$ takes all its values in $n$ and is an injection $\sigma(n) \to n$. [step 2.1, step 2.2, L6]

4.1 Claim 1. The injection produced in step 3.1 contradicts the assumption made in step 1.3, so no injection $\sigma(\sigma(n)) \to \sigma(n)$ exists. Since $n$ was arbitrary, this is exactly the induction step for the property $P(n)$ that there is no injection $\sigma(n) \to n$, and step 1.2 is $P(0)$; so $P(n)$ holds for every $n \in \mathbb{N}$. [step 1.2, step 1.3, step 3.1, L1]

5.1 Claim 2. Let $m < n$. Then $m \in n$, and $m \le n$ gives $m \subseteq n$, so $\sigma(m) = m \cup \{m\} \subseteq n$. If some $g : n \to m$ were injective, its restriction to $\sigma(m)$ would be an injection $\sigma(m) \to m$, which step 4.1 forbids. Hence there is no injection $n \to m$. [step 4.1, L2, L6]

5.2 Claim 4. Since $\mathbb{N}$ is closed under $\sigma$ we have $\sigma(n) \in \mathbb{N}$, and $\mathbb{N}$ is a transitive set, so $\sigma(n) \subseteq \mathbb{N}$. If some $F : \mathbb{N} \to n$ were a bijection, it would in particular be an injection, and its restriction to $\sigma(n)$ would be an injection $\sigma(n) \to n$, which step 4.1 forbids. Hence $\mathbb{N} \not\approx n$. [step 4.1, L2, L6, given]

5.3 Claim 5. Let $A \subseteq n$ with $n \approx A$, and suppose $A \ne n$. Then $n \ne 0$, since the only subset of $0 = \varnothing$ is $\varnothing = 0$ itself, so $n = \sigma(m)$ for some $m \in \mathbb{N}$; moreover $m \in \sigma(m) = n$ and $m \notin m$, so $n \setminus \{m\} = (m \cup \{m\}) \setminus \{m\} = m$. Choose $j \in n \setminus A$, possible because $A \subseteq n$ and $A \ne n$, and let $h : n \to A$ be a bijection; since $j \notin A$ we have $A \subseteq n \setminus \{j\}$, so $h$ read as a map into $n \setminus \{j\}$ is an injection $n \to n \setminus \{j\}$. The transposition $\tau^{n}_{j,m}$ is a bijection of $n$ carrying $n \setminus \{j\}$ onto $n \setminus \{m\} = m$, so its composite with $h$ is an injection $n \to m$, that is an injection $\sigma(m) \to m$, which step 4.1 forbids. Hence $A = n$. [step 1.1, step 4.1, L3, L5, L6, choose]

6.1 Claim 3. Let $n, m \in \mathbb{N}$ with $n \approx m$, and suppose $n \ne m$. By trichotomy either $m < n$ or $n < m$. If $m < n$, a bijection $n \to m$ is in particular an injection $n \to m$, which step 5.1 forbids. If $n < m$, a bijection $n \to m$ has an inverse bijection $m \to n$, which is in particular an injection $m \to n$, and step 5.1 forbids that too, with the roles of $m$ and $n$ interchanged. Hence $n = m$. [step 5.1, L4, L6]

7.1 Claims 1, 2, 3, 4 and 5 are established in steps 4.1, 5.1, 6.1, 5.2 and 5.3 respectively. [step 4.1, step 5.1, step 5.2, step 5.3, step 6.1] ∎

## Remarks

- **Where the work is.** Everything rests on claim 1, and claim 1 rests on one device: a map into $\sigma(n)$ can be modified by a transposition of the codomain so that the top point $\sigma(n)$ goes to the top value $n$, after which the rest of the map misses $n$ and lands in $n$. Without that normalisation the inductive hypothesis does not apply, since an arbitrary injection $\sigma(\sigma(n)) \to \sigma(n)$ need not send anything to $n$.

- **No choice is used.** Every map built above is defined by an explicit rule: the transposition is given by three cases, and the only element selected anywhere is a single $j \in n \setminus A$ in step 5.3, a single choice from a nonempty set, which needs no choice principle.

- **Claim 5 and the two notions of infinity.** A set is *Dedekind-infinite* when it is equinumerous with a proper subset of itself. Claim 5 says no natural number is, and transporting along a bijection extends this to every finite set, which is the ZF half of the comparison discussed in [[fs-infinite-has-countable-subset-in-zf]]: Dedekind-infinite implies infinite outright in ZF, while the converse is not a theorem of ZF unless ZF is inconsistent, that item's conclusion being conditional on the consistency of ZF and resting on an external independence result quoted rather than proved. The successor map $\sigma : \mathbb{N} \to \mathbb{N} \setminus \{0\}$ shows $\mathbb{N}$ itself is Dedekind-infinite, so the restriction to natural numbers in claim 5 is essential.

- **Relation to the ordinals page.** [[def-cardinal]] calls an ordinal $\kappa$ a cardinal when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$. Claim 3 makes every natural number a cardinal and claim 4 makes $\omega$ one, which is what licenses the traditional $\aleph_0 = \omega$. That page comes much later in the library; the pointer here is orientation only, and nothing above rests on it.
