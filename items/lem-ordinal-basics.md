---
id: lem-ordinal-basics
kind: lemma
title: "Basic closure properties of ordinals"
status: published
origin: session
deps: [def-ordinal, def-well-order, lem-nat-transitive-irreflexive]
justified_by: []
aliases: [lem-ordinal-elementary-facts]
landmark: false
short: "elements, successors, unions, intersections of ordinals are ordinals"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). Then:

**(a)** every element of $\alpha$ is an ordinal;

**(b)** $\alpha \notin \alpha$;

**(c)** $\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal;

**(d)** if $A$ is a **nonempty** set of ordinals then $\bigcap A$ is an ordinal;

**(e)** if $A$ is any set of ordinals then $\bigcup A$ is an ordinal;

**(f)** $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or
$\alpha = \beta$;

**(g)** any two ordinals are comparable under inclusion: $\alpha \subseteq \beta$
or $\beta \subseteq \alpha$.

Everything here is a theorem of ZF and uses no choice principle.

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$ and, where stated, a set $A$ all of whose members are ordinals. Claim (g) is not in the usual list of basic facts, but claim (e) needs it, so it is proved here rather than deferred; the trichotomy statement is then read off from it on the next item of this page.

[A1] An ordinal is a transitive set on which $\in$ is a strict well-order: irreflexive, transitive as a relation, trichotomous, and with a least element in every nonempty subset ([[def-ordinal]]).

[L1] The restriction of a strict well-order to a subset is again a strict well-order, since totality and least elements are inherited by subsets ([[def-well-order]]).

## Proof

**Proof technique:** direct.

1.1 Claim (a): let $x \in \alpha$; then $x \subseteq \alpha$ by transitivity of $\alpha$, so $\in$ strictly well-orders $x$ by [L1], and $x$ is transitive, because $z \in y \in x$ gives $y \in \alpha$ and $z \in \alpha$ by transitivity of $\alpha$, whence $z \in x$ by transitivity of the relation $\in$ on $\alpha$; so $x$ is an ordinal. [A1, L1]

1.2 Claim (b): if $\alpha \in \alpha$ then $\alpha$ is an element of $\alpha$ satisfying $\alpha \in \alpha$, contradicting irreflexivity of $\in$ on $\alpha$; hence $\alpha \notin \alpha$. [A1]

1.3 Claim (f), the easy direction: $\alpha \in \beta$ gives $\alpha \subseteq \beta$ by transitivity of $\beta$, and $\alpha = \beta$ gives $\alpha \subseteq \beta$ trivially. [A1]

2.1 Claim (f), the substantial direction: assume $\alpha \subseteq \beta$ and $\alpha \ne \beta$, let $\gamma$ be the $\in$-least element of the nonempty set $\beta \setminus \alpha \subseteq \beta$, and check $\gamma = \alpha$; indeed $\delta \in \gamma$ forces $\delta \in \beta$ by transitivity of $\beta$ and then $\delta \in \alpha$, since otherwise $\delta \in \beta \setminus \alpha$ with $\delta \in \gamma$ contradicts minimality, so $\gamma \subseteq \alpha$; conversely $\delta \in \alpha \subseteq \beta$ compared with $\gamma$ by trichotomy in $\beta$ cannot satisfy $\delta = \gamma$ or $\gamma \in \delta$, since each would put $\gamma \in \alpha$, using transitivity of $\alpha$ in the second case, so $\delta \in \gamma$ and $\alpha \subseteq \gamma$; hence $\alpha = \gamma \in \beta$. [step 1.3, A1]

2.2 Claim (c): $\alpha^{+}$ is transitive, because $x \in \alpha^{+}$ means $x \in \alpha$, whence $x \subseteq \alpha \subseteq \alpha^{+}$, or $x = \alpha \subseteq \alpha^{+}$; the relation $\in$ is irreflexive on $\alpha^{+}$ by [A1] and step 1.2, transitive there because $x \in y \in z$ with $z = \alpha$ gives $x \in y \subseteq \alpha = z$ and with $z \in \alpha$ reduces to transitivity in $\alpha$, and trichotomous there because two elements of $\alpha$ are comparable in $\alpha$ while $x \in \alpha$ satisfies $x \in \alpha$ and neither $\alpha \in x$ nor $x = \alpha$, both of which would give $\alpha \in \alpha$; finally a nonempty $S \subseteq \alpha^{+}$ has an $\in$-least element, namely the $\in$-least element of $S \cap \alpha$ when that is nonempty and $\alpha$ otherwise. [step 1.2, step 1.1, A1]

2.3 Claim (d): $\bigcap A$ is transitive, since $x \in \bigcap A$ gives $x \in \delta$ and hence $x \subseteq \delta$ for every $\delta \in A$, so $x \subseteq \bigcap A$; and $\bigcap A$ is a subset of any fixed member of the nonempty set $A$, so $\in$ strictly well-orders it by [L1]. [step 1.1, A1, L1]

3.1 Claim (g): $\gamma = \alpha \cap \beta$ is an ordinal by claim (d) applied to $\{\alpha, \beta\}$, and $\gamma \subseteq \alpha$ and $\gamma \subseteq \beta$, so claim (f) gives $\gamma \in \alpha$ or $\gamma = \alpha$, and likewise for $\beta$; both memberships at once would give $\gamma \in \alpha \cap \beta = \gamma$, contradicting claim (b), so $\gamma = \alpha$ or $\gamma = \beta$, that is $\alpha \subseteq \beta$ or $\beta \subseteq \alpha$. [step 2.3, step 2.1, step 1.3, step 1.2]

4.1 Claim (e): $\bigcup A$ is transitive, since $x \in \delta \in A$ gives $x \subseteq \delta \subseteq \bigcup A$; its elements are ordinals by claim (a), so $\in$ is irreflexive on it by claim (b) and transitive on it because $x \in y \in z$ with $z \in \delta \in A$ puts $x, y, z$ all in the ordinal $\delta$; any two of its elements lie in a common member of $A$ by claim (g) and are therefore comparable, which gives trichotomy by claim (b) and claim (f); and a nonempty $S \subseteq \bigcup A$ has an $\in$-least element, namely the $\in$-least element of $S \cap \delta$ for any $\delta \in A$ meeting $S$, since an element of $S$ lying $\in$-below it would lie in $\delta$ by transitivity and contradict minimality. [step 3.1, step 1.1, step 1.2, step 2.1, A1]

5.1 Claims (a) to (g) are established. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎

## Remarks

**The successor is the immediate successor.** Claim (c) makes $\alpha^{+}$ an ordinal, and it is the least ordinal strictly above $\alpha$: any $\gamma$ with $\alpha \in \gamma$ satisfies $\alpha^{+} \subseteq \gamma$, hence $\alpha^{+} \le \gamma$ by claim (f). So the ordinals have no gaps immediately above a given point, which is what makes the successor and limit dichotomy of [[def-limit-ordinal]] exhaustive.

**Suprema come for free.** Claim (e) says a set of ordinals always has a least upper bound, namely $\bigcup A$: it contains every member of $A$ as a subset, hence lies weakly above each by claim (f), and any ordinal weakly above all of them contains $\bigcup A$. Claim (d) gives the dual statement for a nonempty set. Neither needs any completeness assumption, in sharp contrast with the situation for $\mathbb{R}$.

**Nonemptiness in claim (d) is essential.** The intersection of the empty family is not a set, so the hypothesis cannot be dropped. The union of the empty family, by contrast, is $\emptyset = 0$, which is why claim (e) needs no such hypothesis.

**Claim (g) is a departure from the usual bookkeeping.** It is normally derived alongside trichotomy. It is proved here because claim (e) cannot be proved without it, and separating them would either duplicate the argument or create a circular dependency between this lemma and [[lem-ordinal-trichotomy]].

**The naturals are the model case.** Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]), which is exactly claims (a) and (b) in the situation this definition abstracts, and $\sigma(n) = n \cup \{n\}$ is the successor operation of claim (c). That every natural number, and $\omega$ itself, really is an ordinal is proved in [[lem-omega-least-limit-ordinal]].
