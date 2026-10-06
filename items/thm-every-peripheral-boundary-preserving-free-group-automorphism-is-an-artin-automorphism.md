---
id: thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism
kind: theorem
title: "Every peripheral-boundary-preserving automorphism is an Artin automorphism"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 6
deps: [lem-artins-product-cancellation-dichotomy, lem-an-extremal-cancellation-shortens-an-artin-substitution, def-peripheral-boundary-preserving-automorphism-of-f-n, def-artin-automorphisms-of-the-free-group, def-the-artin-representation-on-a-free-group, def-braid-group-by-the-artin-presentation, def-free-group, thm-reduced-words-form-the-free-group]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-15; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"f825997d70c736295942047e5e750578d1ea05739c6c129911ae51b8cc2dca77","evidence":["research/frontier-38-owner-30-reader-15.md","research/frontier-38-owner-30-reader-findings-15.json","research/frontier-38-owner-30-dispatch/reader-reader-15.result.json","research/frontier-38-owner-30-step5-hash-15-post-5a.json","research/frontier-38-owner-30-alpha-batch-15-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-15.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism.md","historical_raw_sha256":"aa279e0c8f3bc800d96e1cc36a0cdf9287e0d2a5bb56c493d3cf6fa2b4095e9b","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:39:44.080Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, Theorem 16 and its proof, printed pp. 113-115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, Theorem 1.3, printed p. 9"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Every peripheral-boundary-preserving automorphism
$A\in\operatorname{Aut}(F_n)$
([[def-peripheral-boundary-preserving-automorphism-of-f-n]]) equals
$\rho(\beta)$ for some braid word $\beta$, and $\beta$ may be chosen as a
product of the generators $\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$. No
choice principle is used.

## Facts & Assumptions

**Given:** a peripheral-boundary-preserving automorphism $A$ of
$F_n=\langle x_1,\dots,x_n\rangle$, written in the normalised reduced form
$$A(x_i)=Q_i^{-1}x_{\pi(i)}Q_i\qquad(1\le i\le n)$$
with reduced words $Q_i$, and with $A(x_1\cdots x_n)=x_1\cdots x_n$.

[F1] *The length of $A$.* By [[def-peripheral-boundary-preserving-automorphism-of-f-n]] the conjugators $Q_i$ may be chosen shortest, and changing a conjugator by a power of its middle generator does not change the conjugacy class; hence the minimal total length $\ell(A):=\min\sum_i|Q_i|$ over all such representations is a well-defined nonnegative integer. A representation of total length $\ell(A)$ is called minimal. ([[def-peripheral-boundary-preserving-automorphism-of-f-n]], [[lem-an-extremal-cancellation-shortens-an-artin-substitution]].)

[F2] *The dichotomy.* In a reduced conjugator representation of $\prod_iQ_i^{-1}x_{\pi(i)}Q_i=x_1\cdots x_n$, either no adjacent junction cancellation deletes a middle letter, in which case $A=\operatorname{id}$ and every $Q_i$ is empty; or choose the least qualifying adjacent pair and its first cancelled middle letter ([[lem-artins-product-cancellation-dichotomy]]).

[F3] *Shortening.* In the second case of [F2], postcomposition by $\rho(\sigma_i)$ or its inverse, according to which middle letter is cancelled first, gives a peripheral-boundary-preserving $A'$ with total conjugator length at least one smaller. Thus $A=A'\circ\rho(\sigma_i)^{\epsilon}$ for $\epsilon=\pm1$ ([[lem-an-extremal-cancellation-shortens-an-artin-substitution]], [[def-artin-automorphisms-of-the-free-group]]).

[F4] *The representation.* $\rho:B_n\to\operatorname{Aut}(F_n)$ is a group homomorphism with $\rho(\sigma_i)$ the explicit substitution of [[def-artin-automorphisms-of-the-free-group]], so $\rho(\beta'\sigma_i^{\epsilon})=\rho(\beta')\rho(\sigma_i)^{\epsilon}$ and $\rho(\sigma_i^{\epsilon}\beta')=\rho(\sigma_i)^{\epsilon}\rho(\beta')$ for every braid word $\beta'$ and $\epsilon=\pm1$; and $\rho$ of the empty word is $\operatorname{id}$. ([[def-the-artin-representation-on-a-free-group]], [[def-braid-group-by-the-artin-presentation]].)

[F5] *Reduced words.* The words $x_{\pi(1)}x_{\pi(2)}\cdots x_{\pi(n)}$ and $x_1x_2\cdots x_n$ are reduced, and reduced words represent the same element only if they are equal ([[thm-reduced-words-form-the-free-group]], [[def-free-group]]).

## Proof

**Proof technique:** strong induction on the minimal total length $\ell(A)$.

1.1 *Base case: $\ell(A)=0$.* If $\ell(A)=0$, some representation has all $Q_i=1$, so $A(x_i)=x_{\pi(i)}$ for every $i$; the boundary condition gives $x_{\pi(1)}\cdots x_{\pi(n)}=x_1\cdots x_n$, and by [F5] the two reduced words are equal, so $\pi=\operatorname{id}$ and $A=\operatorname{id}=\rho(\text{empty word})$. This covers $n=0$, where $F_0$ is trivial, and $n=1$, where every peripheral-boundary-preserving automorphism is the identity. [F1, F4, F5, base]

1.2 *Induction hypothesis.* Fix $m\ge1$ and assume that every peripheral-boundary-preserving automorphism $A'$ with $\ell(A')<m$ equals $\rho(\beta')$ for some braid word $\beta'$. [ih]

1.3 *A minimal representation has a qualifying junction.* Let $A$ have $\ell(A)=m>0$ and choose a representation of total length $m$. The first case of [F2] would give all $Q_i$ empty, contrary to $m>0$. Thus its second case selects an adjacent pair whose junction cancellation deletes a middle letter. [F1, F2]

2.1 *Shortening.* By [F3] there is a peripheral-boundary-preserving $A'$ with $\ell(A')\le m-1$, and $A=A'\circ\rho(\sigma_i)^{\epsilon}$ for $\epsilon=\pm1$. The induction hypothesis gives $A'=\rho(\beta')$. [F3, step 1.2, step 1.3]

3.1 *Recovering a braid word.* By [F4], $A=\rho(\beta')\circ\rho(\sigma_i)^{\epsilon}=\rho(\beta'\sigma_i^{\epsilon})$. This is a word in the required generators and their inverses. [F4, step 2.1]

4.1 *Discharge.* The base case 1.1 settles $\ell(A)=0$, and steps 1.3, 2.1 and 3.1 deduce the case $\ell(A)=m$ from the induction hypothesis of step 1.2 for all smaller lengths; by induction on the nonnegative integer $\ell(A)$ every peripheral-boundary-preserving automorphism is $\rho(\beta)$ for a braid word $\beta$ of the displayed form. Every argument used the explicit normal form, the finite cancellation analysis and the displayed substitutions, so no choice principle is used. [step 1.1, step 1.2, step 3.1, discharge-induction] ∎

## Remarks

- This is the sufficiency half of Artin's characterization [[thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n]]; the necessity half is the choice-free lemma [[lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word]].
- The proof uses neither completeness nor faithfulness of $\rho$: the braid word is produced by the induction, not recognised by an injectivity statement. This is why the theorem is choice-free while the full characterization consumes AC through faithfulness.
- Artin's subset variant uses the ordered sub-product and the corresponding braid generators for that subset of ends. It is not an assertion that the original adjacent generators suffice when nonconsecutive indices are retained.
