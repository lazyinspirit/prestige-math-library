---
id: thm-bernstein-sets-exist-under-a-well-ordering-of-r
kind: theorem
title: "Assuming the real line can be well ordered, a Bernstein set exists"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bernstein-set-on-r, thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum,
       thm-cantor-set-ternary-description, thm-rationals-countable, lem-rat-embeds-dense,
       thm-transfinite-recursion, def-well-order, def-injection-surjection-bijection,
       def-perfect-set-r, thm-schroder-bernstein, lem-cardinality-of-a-well-orderable-set,
       def-cardinal, cor-cardinal-absorption, def-cardinal-arithmetic,
       thm-cardinal-arithmetic-agrees-with-finite-counting]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Theorem 8.5"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
    - title: "Bernstein set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernstein_set"
pipeline_run: null
---

## Statement

Assume the real line can be well ordered. Then there exists a Bernstein set
$B \subseteq \mathbb{R}$.

## Facts & Assumptions

**Given:** A well-order $\prec$ of $\mathbb{R}$.

[F1] A Bernstein set is a subset of $\mathbb{R}$ that meets every nonempty perfect subset of $\mathbb{R}$, and whose complement does too ([[def-bernstein-set-on-r]]).

[L1] Every nonempty perfect subset of $\mathbb{R}$ has the cardinality of the continuum, equivalently is equinumerous with $\mathbb{R}$ ([[thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum]]).

[L2] The Cantor-set ternary-description theorem gives a bijection between $\{0,1\}^{\mathbb{N}}$ and a subset of $\mathbb{R}$ ([[thm-cantor-set-ternary-description]], claim 3), and $\mathbb{Q} \approx \mathbb{N}$ with rationals dense in $\mathbb{R}$ ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[L3] If there are injections both ways then the two sets are equinumerous; a set equinumerous with a well-orderable set is well-orderable and has the same cardinality, and that cardinality is a cardinal ([[thm-schroder-bernstein]], [[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]]).

[L4] If $\kappa$ is an infinite cardinal then $\kappa \otimes 2 = \kappa$, and the natural number $2$ is a cardinal ([[cor-cardinal-absorption]], [[def-cardinal-arithmetic]], [[thm-cardinal-arithmetic-agrees-with-finite-counting]]).

[L5] Transfinite recursion along a well-order is available in ZF ([[thm-transfinite-recursion]], [[def-well-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal{P}_{\mathrm{perf}}$ be the family of nonempty perfect subsets of $\mathbb{R}$. Every such set is closed, so it is determined by the set of rational open intervals disjoint from it; since rational intervals are countably coded, [L2] gives an injection $\mathcal{P}_{\mathrm{perf}} \to \mathbb{R}$. Conversely the map $a \mapsto [a,a+1]$ is an injection $\mathbb{R} \to \mathcal{P}_{\mathrm{perf}}$, because each interval $[a,a+1]$ is nonempty and perfect in the sense of [[def-perfect-set-r]]. Hence [L3] gives $\mathcal{P}_{\mathrm{perf}} \approx \mathbb{R}$. Let $\kappa := |\mathbb{R}|$. The given well-order of $\mathbb{R}$ makes $\mathbb{R}$ well-orderable, so [L3] gives $|\mathcal{P}_{\mathrm{perf}}|=\kappa$ and shows that $\kappa$ is a cardinal. The interval $[0,1]$ is a nonempty perfect subset of $\mathbb{R}$, so [L1] shows $\kappa$ is infinite; therefore [L4] gives $|\mathcal{P}_{\mathrm{perf}} \times 2| = \kappa$. Fix a bijection $e:\kappa \to \mathcal{P}_{\mathrm{perf}} \times 2$. [given, L1, L2, L3, L4, construct]

2.1 For $\alpha \in \kappa$, write $e(\alpha)=(P_\alpha,\varepsilon_\alpha)$ with $\varepsilon_\alpha \in 2$. Suppose $z_\beta$ has been defined for every $\beta < \alpha$, and put $Z_\alpha := \{\, z_\beta : \beta < \alpha \,\}$. By construction each new $z_\beta$ is chosen outside the earlier set $Z_\beta$, so the map $\beta \mapsto z_\beta$ is a bijection from $\alpha$ onto $Z_\alpha$. Hence $|Z_\alpha| = |\alpha| < \kappa$, because $\alpha \in \kappa$ and $\kappa$ is a cardinal. The set $P_\alpha$ is nonempty perfect, so [L1] and [L3] give $|P_\alpha| = \kappa$; therefore $P_\alpha \setminus Z_\alpha$ is nonempty. Let $z_\alpha$ be the $\prec$-least point of $P_\alpha \setminus Z_\alpha$. By transfinite recursion [L5], this defines a function $\alpha \mapsto z_\alpha$ on $\kappa$. [step 1.1, L1, L3, L5, construct]

3.1 Put $B := \{\, z_\alpha : \alpha \in \kappa \text{ and } \varepsilon_\alpha = 0 \,\}$. Let $P$ be any nonempty perfect subset of $\mathbb{R}$. Since $e$ is onto, there exist $\alpha,\beta \in \kappa$ with $e(\alpha)=(P,0)$ and $e(\beta)=(P,1)$. Step 2.1 gives $z_\alpha \in P$ and $z_\beta \in P$. Moreover $z_\alpha \in B$ by definition, while $z_\beta \notin B$ because $\varepsilon_\beta = 1$. Thus every nonempty perfect subset of $\mathbb{R}$ meets both $B$ and $\mathbb{R}\setminus B$, so [F1] makes $B$ a Bernstein set. [step 2.1, F1] ∎
