---
id: ex-borel-subspaces-of-polish-spaces-are-standard-borel
kind: example
title: "Borel subspaces of polish spaces are standard borel"
status: draft
origin: pipeline
deps: [lem-borel-subspaces-admit-polish-presentations, def-axiom-of-choice, thm-rationals-countable, thm-reals-cauchy-complete, lem-rat-embeds-dense]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Under AC, every Borel subset $B$ of a Polish space $P$ is standard Borel with its trace Borel sigma-algebra. A concrete instance is $\mathbb Q\subset\mathbb R$, presented by its discrete topology.

## Facts & Assumptions

**Given:** AC, a Polish space P and a Borel subset B; the concrete instance is Q inside R.

[F1] Under AC a Borel subset has a finer Polish topology with exactly its trace Borel sets. ([[lem-borel-subspaces-admit-polish-presentations]])

[F2] Q is countable. ([[thm-rationals-countable]])

[F3] AC supplies the topology and metric choices in the refinement lemma. ([[def-axiom-of-choice]])

[F4] The usual real metric is complete. ([[thm-reals-cauchy-complete]])

[F5] Q is dense in R. ([[lem-rat-embeds-dense]])

## Verification

**Proof technique:** direct.

1.1 Apply [F1] with its AC hypothesis [F3]. It gives a Polish topology on B whose Borel sigma-algebra is the trace of that of P. The identity map from the trace measurable space to this presentation is therefore bimeasurable, proving the general assertion, including B empty. [F1, F3]

2.1 For the instance, R is complete by [F4] and separable by [F2]–[F5], hence Polish. Each singleton rational is closed in R (a point outside it has a ball avoiding it), so Q and every subset of Q are Borel by [F2] and countable unions. Thus $\mathcal B(\mathbb R)|_{\mathbb Q}=\mathcal P(\mathbb Q)$. The discrete metric $d(q,r)=\mathbf1_{\{q\ne r\}}$ is complete because a Cauchy sequence is eventually constant; Q itself is countable dense for this topology. Its Borel sets are again all subsets. For example the preimage of $\{1/2,2/3\}$ under the identity is exactly $\{1/2,2/3\}$ in both measurable structures. This gives the claimed explicit Polish presentation without requiring the inherited metric to be complete. [F2, F4, F5] ∎

## Source notes

Marker Theorem 2.24, printed pp.20–21, and Definition 2.29, pp.21–22; Durrett Theorem 2.1.22, printed pp.53–54. The Q instance is calculated locally.
