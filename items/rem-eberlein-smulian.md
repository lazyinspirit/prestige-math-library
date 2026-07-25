---
id: rem-eberlein-smulian
kind: remark
title: "Eberlein-Smulian theorem"
status: draft
origin: session
proved_here: false
deps: [rem-weak-and-weak-star-topologies]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "weak compactness is sequential after all"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Eberlein-Smulian theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Eberlein%E2%80%93%C5%A0mulian_theorem"
    - title: "R. Whitley, An elementary proof of the Eberlein-Smulian theorem, Math. Ann. 172 (1967) 116-118"
      url: "https://doi.org/10.1007/bf01350091"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ be a Banach space and $A \subseteq X$. The following are equivalent.

1. $A$ is relatively weakly compact, that is, the weak closure of $A$ is weakly compact.
2. $A$ is relatively weakly sequentially compact: every sequence in $A$ has a subsequence
   converging weakly to some point of $X$.
3. $A$ is relatively weakly countably compact: every sequence in $A$ has a weak cluster point in
   $X$.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** Whitley's elementary argument, which builds a separable subspace adapted to
a given sequence and transfers the question to a setting where the weak topology is metrizable on
bounded sets; the standard proofs also use the canonical embedding into the bidual and hence
Hahn-Banach.

**Why it matters here.** It is a genuine surprise given
[[rem-weak-and-weak-star-topologies]]: the weak topology is not first countable, so compactness and
sequential compactness have no general reason to coincide, and for the weak-star topology they
indeed do not. That they do coincide weakly in a Banach space is special, and it is what allows
weak compactness arguments to be run with sequences.
