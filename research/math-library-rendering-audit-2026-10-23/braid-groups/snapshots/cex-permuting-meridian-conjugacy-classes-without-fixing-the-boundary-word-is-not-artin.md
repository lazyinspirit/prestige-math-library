---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered cumulative historical verification: original independent Step5 whole-item claim/body/proof reading for cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin, completed Step5 repairs/dispositions, and later exact Step7 local correction reasoning. Later correction evidence is local author repair/self-review, not an independent fresh audit. Every substantive preguard-to-current delta is covered by the recorded repair reason; no new review or historical audit stamp is claimed. Supplier/source coverage is limited to actual recorded passages/interfaces, excluding recursive foundational closure/all bibliography.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader and Step7 repair dispatch","content_sha256":"68eff03159a54c51b51e31cad5dea94f00e31857d1fac218b30c049d0fc13d87","evidence":["research/frontier-38-owner-30-reader-15.md","research/frontier-38-owner-30-reader-findings-15.json","research/frontier-38-owner-30-dispatch/reader-reader-15.result.json","research/frontier-38-owner-30-alpha-batch-15-5a-decisions.json","research/frontier-38-owner-30-step5-closure.json","research/frontier-38-owner-30-step7-auditor-baseline.json","research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u15.json","research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u15.result.json"],"historical_binding":{"preguard_raw_sha256":"46daa58e9f9895bf24c0d80168717395b461ed5c04ecf6a9d330dd018304bfa8","preguard_content_sha256":"1ccbdf8ce0a1aefc01984febac31bbd5d28fe249be8b32880253121ccc93294b","captured_carrier":{"path":"research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u15.log","line":6119},"postguard_content_sha256":"94b4dc55ca0cc0dc915a82e1bbec5c3413d6207292bfa3984cdcb5281a4b1ca5","final_carrier":"git d90f26208:items/cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin.md","publication_transformation":"status draft to published; verification excluded; remaining mathematics/source bytes match exact postguard carrier","original_read_completed_at":"2026-10-03T08:39:44.080Z","local_repair_completed_at":"2026-10-03T15:44:02.198Z","local_repair_reason":"The transposition computations prove only peripheral preservation without boundary preservation. Step 3.1 additionally asserted mutual independence without invoking or verifying the reverse witness. This is nonfatal to the stated counterexample, whose automorphism, reduced-word inequality and exclusion from the Artin image are correct. Added step 1.3: A(x_1)=x_1^{-1}, A(x_2)=x_1^2x_2, others fixed, has A^2=id and fixes delta; the exponent homomorphism h(x_1)=1, h(x_j)=0 distinguishes A(x_1) from every conjugate of a positive basis generator. Both nonimplications and the unchanged counterexample are now proved without AC. Statement refuted unchanged byte-for-byte; no independent audit claimed.","local_repair_qualification":"Local author repair/self-review; cumulative with original independent full item reading"}}
id: cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin
kind: counterexample
title: "A conjugate-permuting automorphism that does not fix the boundary word is not in the braid image"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 7
deps: [lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word, def-peripheral-boundary-preserving-automorphism-of-f-n, def-the-artin-representation-on-a-free-group, def-free-group, thm-reduced-words-form-the-free-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, condition (16) and Theorem 16, printed p. 114"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, Theorem 1.3 conditions (1) and (2), printed p. 9"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement refuted

For $n\ge2$ let $\varepsilon\in\operatorname{Aut}(F_n)$ be
$$\varepsilon(x_1)=x_2,\qquad \varepsilon(x_2)=x_1,\qquad \varepsilon(x_j)=x_j\ \ (j\ge3).$$
Then $\varepsilon(x_i)$ is conjugate (indeed equal) to a generator for every
$i$, but
$$\varepsilon(x_1x_2x_3\cdots x_n)=x_2x_1x_3\cdots x_n\ne x_1x_2\cdots x_n;$$
hence $\varepsilon$ is not in the image of the Artin representation. No choice
principle is used.

## Facts & Assumptions

**Given:** the free group $F_n=\langle x_1,\dots,x_n\rangle$ with $n\ge2$, the
basis permutation $\varepsilon$ of the statement, and the Artin representation
$\rho:B_n\to\operatorname{Aut}(F_n)$ of
[[def-the-artin-representation-on-a-free-group]].

[F1] *The permutation is an automorphism.* A map of the free basis
$x_1,\dots,x_n$ extends uniquely to a group homomorphism
$F_n\to F_n$, and the same is true of its inverse permutation, so
$\varepsilon$ is an automorphism with $\varepsilon^{-1}=\varepsilon$.
([[def-free-group]], [[thm-reduced-words-form-the-free-group]].)

[F2] *Necessary condition.* For every braid word $\beta$ and every $i$, the
element $\rho(\beta)(x_i)$ is conjugate in $F_n$ to one of the generators and
$\rho(\beta)(x_1\cdots x_n)=x_1\cdots x_n$; this necessary direction uses no
choice principle.
([[lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word]].)

[F3] *The two conditions.* An automorphism satisfying the two properties of
[F2] is called peripheral-boundary-preserving
([[def-peripheral-boundary-preserving-automorphism-of-f-n]]); the
counterexample shows that the first condition alone does not suffice.

## Counterexample

Take the basis permutation $\varepsilon$ of the statement and compare it with
the necessary condition of [F2].

1.1 *$\varepsilon$ permutes peripheral conjugacy classes.* By [F1], $\varepsilon$ is an automorphism and $\varepsilon(x_i)$ is the generator $x_2$ for $i=1$, the generator $x_1$ for $i=2$, and the generator $x_i$ for $i\ge3$; in each case $\varepsilon(x_i)$ is a generator, hence conjugate to a generator (via the empty word). [F1, F3]

1.2 *$\varepsilon$ changes the boundary word.* By [F1], $\varepsilon(x_1x_2x_3\cdots x_n) =\varepsilon(x_1)\,\varepsilon(x_2)\,\varepsilon(x_3)\cdots\varepsilon(x_n) =x_2x_1x_3\cdots x_n .$ The words $x_2x_1x_3\cdots x_n$ and $x_1x_2x_3\cdots x_n$ are both reduced; for $n\ge2$ they differ in their first two letters, so by reduced-word uniqueness they represent different elements of $F_n$: $\varepsilon(x_1\cdots x_n)\ne x_1\cdots x_n$. [F1, algebra]

1.3 *The reverse nonimplication.* For the complementary witness described in the Remarks of [[def-peripheral-boundary-preserving-automorphism-of-f-n]], use [F1]'s free-group universal property to define $A(x_1)=x_1^{-1}$, $A(x_2)=x_1^2x_2$, and $A(x_j)=x_j$ for $j\ge3$. Applying $A$ twice gives $A^2(x_1)=x_1$ and $A^2(x_2)=x_1^{-2}x_1^2x_2=x_2$, with all other generators fixed; hence $A^2=\operatorname{id}$ and $A$ is an automorphism. Moreover, $A(x_1\cdots x_n)=x_1^{-1}x_1^2x_2\cdots x_n=x_1\cdots x_n$. The same universal property gives a homomorphism $h:F_n\to(\mathbb Z,+)$ with $h(x_1)=1$ and $h(x_j)=0$ for $j\ne1$. Conjugation preserves $h$, but $h(A(x_1))=-1$, whereas every positive basis generator has $h$-value $0$ or $1$. Thus $A(x_1)$ is not conjugate to any positive basis generator: $A$ satisfies the boundary condition and fails the peripheral condition. [F1, F3, construct, algebra]

2.1 *$\varepsilon$ is outside the braid image.* By [F2] every automorphism in the image of $\rho$ fixes the ordered product $x_1\cdots x_n$. Step 1.2 shows that $\varepsilon$ does not, so $\varepsilon\ne\rho(\beta)$ for every braid word $\beta$: the automorphism $\varepsilon$ permutes the meridian conjugacy classes but is not induced by a braid. [F2, step 1.2]

3.1 *Conclusion.* Steps 1.1 and 1.2 show that the peripheral condition does not imply boundary preservation; step 1.3 proves the reverse nonimplication. Thus the two conditions are independent for $n\ge2$, and step 2.1 establishes the stated exclusion of $\varepsilon$ from the braid image. Only the choice-free necessary direction [F2], explicit free-group homomorphisms, and finite word computations were used. [F2, step 1.1, step 1.2, step 2.1, step 1.3] ∎

## Remarks

- The example also shows that the condition on $\delta$ cannot be checked in
  the abelianisation: $\varepsilon(\delta)=x_2x_1x_3\cdots x_n$ has the same
  abelianised class as $\delta$, so condition (2) is genuinely stronger than
  the abelianised equality. For $n=2$, $\varepsilon(\delta)=x_2x_1$ is even
  conjugate to $\delta=x_1x_2$, since $x_2x_1=x_2(x_1x_2)x_2^{-1}$, while for
  $n\ge3$ the cyclic reduced words of $x_2x_1x_3\cdots x_n$ and
  $x_1x_2x_3\cdots x_n$ differ; in every case $\varepsilon$ changes $\delta$
  itself.
- The complement of this example is the sufficiency theorem
  `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`:
  once both conditions hold, the automorphism is induced by a braid word.
