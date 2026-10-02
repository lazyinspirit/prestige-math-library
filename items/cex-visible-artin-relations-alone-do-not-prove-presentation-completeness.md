---
id: cex-visible-artin-relations-alone-do-not-prove-presentation-completeness
kind: counterexample
title: "Visible Artin relations alone do not prove presentation completeness"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-the-artin-presentation-is-complete-for-geometric-braids,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       thm-von-dyck,
       def-group-presentation,
       def-integers-modulo-n,
       def-addition-and-multiplication-modulo-n,
       thm-standard-representatives-modulo-n,
       thm-integers-modulo-n-basic-algebra,
       def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ashot Minasyan, MATH6138 Geometric Group Theory, section 2.2 (von Dyck's theorem and the failure of injectivity for a relator that dies in a larger quotient)"
      url: "https://www.personal.soton.ac.uk/am4x07/rs/MATH6138-notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement refuted

Assume AC. The inference

> the relations of a presentation hold in a group $G$ and the images of its
> generators generate $G$, hence the presentation presents $G$

is invalid. For the presented group $P=\langle x\mid x^4=1\rangle$ and
$G=\langle g\mid g^2=1\rangle$, the assignment $x\mapsto g$ kills the defining
relator, because $g^4=1$ in $G$, and $g$ generates $G$, so it induces a
surjective homomorphism $\varphi\colon P\to G$; but $\varphi$ is not injective,
because $x^2$ maps to $1$ while $x^2\ne1$ in $P$. Consequently the published
verification that the Artin relations hold among the geometric half twists and
that the $\sigma_i$ generate the geometric braid group — which through
[[thm-von-dyck]] yields only the surjection $\varphi$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]] — cannot by
itself prove that the Artin presentation presents the geometric braid group;
the missing obligation is exactly the triviality of $\ker\varphi$, supplied by
the combing kernel argument of
[[thm-the-artin-presentation-is-complete-for-geometric-braids]].

## Facts & Assumptions

**Given:** AC, the presented groups $P=\langle x\mid x^4=1\rangle$ and
$G=\langle g\mid g^2=1\rangle$ with their generator classes $x\in P$ and
$g\in G$, the additive groups $\mathbb Z/2$ and $\mathbb Z/4$ of
[[def-integers-modulo-n]], and the surjection $\varphi_n$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]] for the Artin
presentation of [[def-braid-group-by-the-artin-presentation]].

[F1] Von Dyck ([[thm-von-dyck]]): for a presentation $\langle X\mid R\rangle$, a
group $H$ and a function $u\colon X\to H$ whose evaluation sends every $r\in R$
to $e_H$, there is a unique homomorphism $\overline u\colon\langle X\mid R\rangle\to H$
with $\overline u([x])=u(x)$, and $\overline u$ is surjective exactly when
$u(X)$ generates $H$.

[F2] $G=\langle g\mid g^2=1\rangle$ is the quotient of the free group on
$\{g\}$ by the normal closure of $g^2$ ([[def-group-presentation]]), so the
relator is the identity, $g^2=1_G$; consequently $g^4=(g^2)^2=1_G$ and
$g^{-1}=g$, and every element of $G$ is a power $g^k$ with $k\in\{0,1\}$.
Hence $G$ has at most two elements, and the class $g$ generates $G$.

[F3] $P=\langle x\mid x^4=1\rangle$ is the quotient of the free group on
$\{x\}$ by the normal closure of $x^4$ ([[def-group-presentation]]), so
$x^4=1_P$; consequently $x^{-1}=x^3$ and every element of $P$ is a power
$x^k$ with $k\in\{0,1,2,3\}$, so $P$ has at most four elements.

[F4] For every $n\in\mathbb N$, $(\mathbb Z/n,+,[0]_n)$ is an abelian group
with $[a]_n+[b]_n=[a+b]_n$ and $-[a]_n=[-a]_n$
([[thm-integers-modulo-n-basic-algebra]],
[[def-addition-and-multiplication-modulo-n]],
[[def-integers-modulo-n]]); in particular $[1]_4^4=[4]_4=[0]_4$,
$[1]_4^2=[2]_4$, and in $\mathbb Z/4$ one has $[2]_4\ne[0]_4$ because $0$ and
$2$ are the unique representatives in $\{0,1,2,3\}$ of their respective classes
([[thm-standard-representatives-modulo-n]]), while in $\mathbb Z/2$ the
classes $[1]_2$ and $[0]_2$ are distinct for the same reason.

[F5] The proposition [[prop-the-artin-presentation-surjects-onto-geometric-braids]]
verifies that the relators of the Artin presentation evaluate to the identity in
the geometric braid group $G_n$ when the abstract generator $\sigma_i$ is sent
to the class of the elementary half twist, that these classes generate $G_n$,
and that von Dyck therefore produces a unique surjective homomorphism
$\varphi_n\colon B_n^{\mathrm{Artin}}\to G_n$; the proposition asserts only
surjectivity, and no injectivity of $\varphi_n$ is available from that route.

[F6] Under AC the completeness theorem
[[thm-the-artin-presentation-is-complete-for-geometric-braids]] proves, by the
combing kernel argument, that $\varphi_n$ is injective for every $n\ge1$; AC is
needed because its combing suppliers use the choice-dependent Fadell–Neuwirth
fibrations ([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]).

## Counterexample

**Proof technique:** counterexample.

1.1 **The assignment $x\mapsto g$ induces a surjection of $P$ onto $G$.** By [F2] one has $g^2=1_G$, hence $g^4=(g^2)^2=1_G$; the evaluation of the single defining relator $x^4$ of $P$ under the function $u(x):=g$ is therefore $g^4=1_G$, so [F1] provides a unique homomorphism $\varphi\colon P\to G$ with $\varphi(x)=g$. Its image contains $g$, and $g$ generates $G$ by [F2], so $\varphi$ is surjective by the surjectivity criterion of [F1]. [F1, F2, F3]

1.2 **$x^2$ is nontrivial in $P$.** The evaluation of the relator $x^4$ under the function $u'(x):=[1]_4$ is $[1]_4^4=[4]_4=[0]_4$ by [F4], so [F1] provides a homomorphism $\psi\colon P\to\mathbb Z/4$ with $\psi(x)=[1]_4$. Then $\psi(x^2)=[1]_4^2=[2]_4\ne[0]_4=\psi(1_P)$ by [F4], because a homomorphism carries the identity to the identity; hence $x^2\ne 1_P$ in $P$. [F1, F3, F4]

2.1 **The surjection is not injective and the groups are not isomorphic.** By step 1.1, $\varphi(x^2)=\varphi(x)^2=g^2=1_G$ using [F2], while $x^2\ne 1_P$ by step 1.2, so the nontrivial element $x^2$ lies in $\ker\varphi$ and $\varphi$ is not injective. In fact the two groups have different sizes: by [F3] every element of $P$ is one of $x^0,x^1,x^2,x^3$, and $\psi$ from step 1.2 is surjective onto the four-element group $\mathbb Z/4$ by [F4] and the criterion of [F1], so $P$ has exactly four elements; by [F2] every element of $G$ is $1_G$ or $g$, and the function $v(g):=[1]_2$ evaluates the relator $g^2$ to $[2]_2=[0]_2$, so [F1] yields a homomorphism $G\to\mathbb Z/2$ with $g\mapsto[1]_2\ne[0]_2$, whence $g\ne1_G$ and $G$ has exactly two elements. Since $4\ne2$, no bijection and hence no group isomorphism $P\to G$ exists: the presentation $\langle x\mid x^4=1\rangle$ does not present $G$, even though its defining relator holds in $G$ and the image of its generator generates $G$. This refutes the inference under examination. [F1, F2, F3, F4, step 1.1, step 1.2]

3.1 **The braid application.** For the Artin presentation, [F5] verifies exactly the two hypotheses of the refuted inference — the Artin relators evaluate to the identity among the geometric half-twist classes, and these classes generate $G_n$ — and von Dyck yields precisely the surjection $\varphi_n$, with no injectivity. The counterexample of step 2.1 shows that this pattern of hypotheses does not in general force the von Dyck map to be an isomorphism, so the published surjectivity argument alone cannot establish that the Artin presentation presents the geometric braid group. What it leaves open is the triviality of $\ker\varphi_n$; the combing kernel argument of [F6] supplies exactly that missing obligation, under AC. [F1, F5, F6, step 2.1]

4.1 **Conclusion.** The counterexample $P\to G$ refutes the general inference, and the parallel von Dyck pattern of the Artin surjection shows that the geometric completeness statement needs the separate kernel computation of [F6]; the counterexample's own arithmetic is choice-free, while AC is carried only because the completeness supplier it contrasts with is AC-dependent. ∎ [F5, F6, step 2.1, step 3.1]

## Remarks

- The two von Dyck constructions in steps 1.1 and 1.2 use the same presentation $P$ with two different targets: the relator $x^4$ dies in $\mathbb Z/2$ as $[4]_2=[0]_2$ and in $\mathbb Z/4$ as $[4]_4=[0]_4$, but the target $\mathbb Z/4$ separates $x^2$ from the identity. This is the mechanism by which a surjection out of a presented group fails to be injective.
- The example is deliberately small: the point is not that $\mathbb Z/2$ and $\mathbb Z/4$ are hard, but that surjectivity plus verification of the relators is a strictly weaker conclusion than presentation completeness, which is what the combing argument of [[thm-the-artin-presentation-is-complete-for-geometric-braids]] adds in the braid case.
