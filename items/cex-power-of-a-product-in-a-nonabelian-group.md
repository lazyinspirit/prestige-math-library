---
id: cex-power-of-a-product-in-a-nonabelian-group
kind: counterexample
title: "$(gh)^{n} = g^{n}h^{n}$ fails without commutativity: two transpositions in $\\operatorname{Sym}(\\{1,2,3\\})$ with $(gh)^{2} \\ne g^{2}h^{2}$"
status: published
origin: session
deps: [def-group-power, lem-group-power-laws, def-symmetric-group, lem-symmetric-group-is-a-group, def-group, def-identity-element, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "$(gh)^{2} \\ne g^{2}h^{2}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Symmetric group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Symmetric_group"
    - title: "Abelian group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abelian_group"
pipeline_run: null
---

## Statement refuted

**False claim:** in every group $G$, $(gh)^{n} = g^{n} h^{n}$ for all
$g, h \in G$ and all $n$ ([[def-group-power]]).

The claim is true when $g$ and $h$ commute, which is exactly what
[[lem-group-power-laws]] asserts and exactly why that lemma carries the
hypothesis in its statement and in its title. Without the hypothesis it fails,
already at $n = 2$: in $\operatorname{Sym}(\{1,2,3\})$ take the transpositions
$g = (1\,2)$ and $h = (2\,3)$. Then $g^{2} h^{2} = \mathrm{id}$ while
$(gh)^{2} \ne \mathrm{id}$.

## Facts & Assumptions

**Given:** $X = \{1,2,3\}$ with $1$, $2$, $3$ pairwise distinct; $\operatorname{Sym}(X)$ with composition $(f \circ k)(x) = f(k(x))$ and identity $\mathrm{id}$ ([[def-symmetric-group]]); and $g = (1\,2)$, $h = (2\,3)$, so $g$ exchanges $1$ and $2$ and fixes $3$, while $h$ exchanges $2$ and $3$ and fixes $1$.

[L1] $\operatorname{Sym}(X)$ is a group under composition ([[lem-symmetric-group-is-a-group]], [[def-group]], [[def-identity-element]]).

[L2] $f^{2} = f^{\sigma(1)} = f^{1} \circ f = f \circ f$, and $f^{0} = \mathrm{id}$ ([[def-group-power]]).

[L3] Two permutations are equal exactly when they agree at every point of $X$ ([[def-injection-surjection-bijection]], [[def-symmetric-group]]).

[L4] The refuted claim: $(gh)^{n} = g^{n} h^{n}$ in every group, for all elements and all $n$.

## Counterexample

**Proof technique:** direct.

1.1 $g \circ g = \mathrm{id}$: $g$ sends $1 \mapsto 2 \mapsto 1$ and $2 \mapsto 1 \mapsto 2$ and fixes $3$ twice. Hence $g^{2} = \mathrm{id}$. [L2, L3, given]

1.2 $h \circ h = \mathrm{id}$ for the same reason, with the pair $2, 3$ in place of $1, 2$. Hence $h^{2} = \mathrm{id}$. [L2, L3, given]

1.3 The composite $g \circ h$ sends $1 \mapsto h(1) = 1 \mapsto g(1) = 2$, sends $2 \mapsto h(2) = 3 \mapsto g(3) = 3$, and sends $3 \mapsto h(3) = 2 \mapsto g(2) = 1$. [L3, given]

2.1 $g^{2} h^{2} = \mathrm{id} \circ \mathrm{id} = \mathrm{id}$. [step 1.1, step 1.2, L1]

2.2 $(gh)^{2} = (g \circ h) \circ (g \circ h)$ sends $1 \mapsto 2 \mapsto 3$ by step 1.3, so it does not fix $1$, since $3 \ne 1$. [step 1.3, L2, L3, given]

3.1 Therefore $(gh)^{2} \ne \mathrm{id} = g^{2} h^{2}$, and the claim of [L4] is false; the elements $g$ and $h$ do not commute, since $g \circ h$ sends $2$ to $3$ while $h \circ g$ sends $2 \mapsto g(2) = 1 \mapsto h(1) = 1$. [step 2.1, step 2.2, L3, L4] ∎

## Remarks

- **What survives without commutativity** is the expansion $(gh)^{2} = ghgh$, which is all that associativity gives. Turning it into $g^{2}h^{2}$ requires exchanging the middle $h$ and $g$, and that exchange is the commuting hypothesis in [[lem-group-power-laws]], nothing weaker.

- **Why this matters for the library.** The published [[lem-power-laws]] states $(ab)^{n} = a^{n}b^{n}$ with no commuting hypothesis and is correct, because it is a statement about a field, where multiplication is commutative by definition. Carrying that form over to groups would be a false generalisation, and this item is the witness.

- The same pair $g, h$ witnesses that $\operatorname{Sym}(\{1,2,3\})$ is not abelian ([[ex-symmetric-group-on-three-letters]]), which is no accident. At $n = 2$ the equation $(gh)^{2} = g^{2}h^{2}$ reads $ghgh = gghh$, and cancelling $g$ on the left and $h$ on the right ([[lem-group-cancellation]]) turns it into $hg = gh$; so at this exponent the law holds for a pair exactly when the pair commutes, and every non-abelian group supplies a counterexample.
