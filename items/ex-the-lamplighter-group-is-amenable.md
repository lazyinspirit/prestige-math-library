---
id: ex-the-lamplighter-group-is-amenable
kind: example
title: "Under the ultrafilter lemma, the standard lamplighter group is amenable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-solvable-and-locally-finite-groups-are-amenable, def-external-semidirect-product, thm-abelian-groups-are-amenable, thm-extensions-of-amenable-groups-are-amenable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Example

Assume the ultrafilter lemma. The lamplighter group

$$L=\Bigl(\bigoplus_{n\in\mathbb Z}\mathbb Z/2\mathbb Z\Bigr)\rtimes\mathbb Z$$

is amenable.

## Facts & Assumptions

**Given:** The semidirect product $L=\left(\bigoplus_{\mathbb Z}\mathbb Z/2\mathbb Z\right)\rtimes\mathbb Z$ with the shift action of $\mathbb Z$ on the lamp coordinates, and the ultrafilter lemma.

[L1] An external semidirect product is the group built from an action by automorphisms ([[def-external-semidirect-product]]).

[L2] Under the ultrafilter lemma, locally finite groups are amenable ([[cor-solvable-and-locally-finite-groups-are-amenable]]).

[L3] Extensions of amenable groups are amenable ([[thm-extensions-of-amenable-groups-are-amenable]]).

[L4] Under the ultrafilter lemma, abelian groups are amenable ([[thm-abelian-groups-are-amenable]]).

## Verification

**Proof technique:** direct.

1.1 The base group $B=\bigoplus_{n\in\mathbb Z}\mathbb Z/2\mathbb Z$ is locally finite, because a finitely generated subgroup is supported on finitely many coordinates and is therefore finite. Thus [L2] makes $B$ amenable. [L2, given, algebra]

2.1 The quotient of $L$ by the normal base group $B$ is $\mathbb Z$, which is abelian and hence amenable by [L4]. Therefore [L3] applies to the semidirect product from [L1] and shows that the lamplighter group $L$ is amenable. [L1, L3, L4, step 1.1] ∎
