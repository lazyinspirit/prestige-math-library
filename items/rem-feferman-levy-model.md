---
id: rem-feferman-levy-model
kind: remark
title: "The Feferman-Levy model: the reals as a countable union of countable sets"
status: draft
origin: session
proved_here: false
deps: [rem-cohen-forcing-ac-independent]
justified_by: []
forward_refs: [fs-countable-union-theorem-of-zf, thm-countable-union-of-countable, def-countable-choice, thm-r-uncountable, def-cardinal]
aliases: []
landmark: true
short: "omega_1 singular; R a countable union of countable sets"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Jech, The Axiom of Choice, North-Holland (1973), Theorem 10.6"
      url: "https://archive.org/details/axiomofchoice0000jech"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "P. J. Cohen, The independence of the continuum hypothesis, Proc. Nat. Acad. Sci. USA 50 (1963), 1143-1148"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF is consistent with all of the following holding
simultaneously:**

- $\mathbb{R}$ is a countable union of countable sets;
- the first uncountable ordinal $\omega_1$ is **singular**, indeed
  $\mathrm{cf}(\omega_1) = \omega$;
- consequently "a countable union of countable sets is countable" fails, and
  $\omega_1$ is not regular.

Feferman and Levy (1963) obtain this by collapsing: starting from a model of
ZFC, force with the finite-support product that makes each $\aleph_n$ of the
ground model countable, for $n \in \mathbb{N}$, and take the symmetric submodel
with finite supports. The ground model's $\aleph_\omega$ becomes the new
$\omega_1$, and it is the supremum of the countably many ordinals
$\aleph_n$, each now countable, so its cofinality is $\omega$. The reals of the
extension are the union over $n$ of the reals added at stage $n$, and each of
those layers is countable in the extension.

Note what does **not** fail: $\omega_1$ still exists, and $\mathbb{R}$ is still
uncountable. A countable union of countable sets is being exhibited whose union
is uncountable, which is possible exactly because no enumeration of the layers
can be chosen uniformly.

## Remarks

- **Not proved in this library.** The Levy collapse and the symmetric submodel
  are not developed here.

- **What would prove it.** The forcing track of
  [[rem-cohen-forcing-ac-independent]], specialised to the Levy collapse
  $\mathrm{Coll}(\omega, {<}\aleph_\omega)$ with finite supports, plus the
  cofinality computation in the symmetric model. Ordinal and cardinal arithmetic
  beyond [[def-cardinal]] is also needed to state the cofinality claim properly.

- **Why it matters here.** Two library results lean on it directly. It is the
  external fact behind [[fs-countable-union-theorem-of-zf]]: the countable union
  theorem [[thm-countable-union-of-countable]] is proved here **from**
  [[def-countable-choice]], and this model shows the hypothesis cannot be
  dropped. It is also the standing warning attached to $\omega_1$: any
  counterexample built on the ordinal space $[0, \omega_1)$ and its sequential
  compactness is silently spending a choice principle, because in this model
  $\omega_1$ has countable cofinality and those arguments collapse. Note also
  that [[thm-r-uncountable]] survives untouched: it is a theorem of ZF, and it is
  not in tension with $\mathbb{R}$ being a countable union of countable sets.

- **Conditional discipline.** Everything above is relative to the consistency of
  ZF, and this library never asserts that the reals are a countable union of
  countable sets, only that ZF alone cannot refute it.
