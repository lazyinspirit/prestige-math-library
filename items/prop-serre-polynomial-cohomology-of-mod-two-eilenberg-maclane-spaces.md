---
id: prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces
kind: proposition
title: "Polynomial mod-two cohomology of Eilenberg–Mac Lane spaces"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-mapping-path-factorization
  - prop-steenrod-square-normalization-instability-and-top-square
  - thm-steenrod-squares-are-well-defined-and-natural
  - def-axiom-of-choice
  - def-mod-two-square-algebra-admissible-sequences-and-excess
  - lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs
  - lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space
  - lem-steenrod-squares-commute-with-relative-cohomology-connectors
  - lem-relative-lifts-produce-cohomological-transgressions
  - lem-fundamental-path-fibration-class-has-the-normalized-relative-lift
  - lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism
  - thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "Theorem 1.32, Lemma 1.33 and induction proof, printed pp. 53–55; Theorem 1.34 and comparison Theorem 1.36, printed pp. 54–58."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For $q\ge1$,

$$H^*(K_q;\mathbb F_2) \cong\mathbb F_2[Sq^I\iota_q\mid I\text{ admissible},\ e(I)<q],$$

including the empty sequence, with the indicated classes as actual polynomial generators of degree $q+|I|$.

## Facts & Assumptions

**Given:** AC; $q\ge1$; a based CW model $K_q=K(\mathbb F_2,q)$ with normalized fundamental class $\iota_q$; the marked weak equivalence $h:K_q\to\Omega K_{q+1}$ of the path-loop input lemma; and the admissible-basis calculus of the square algebra.

[F1] The base case $q=1$ is the marked infinite real projective space with cohomology $\mathbb F_2[\iota_1]$ ([[lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space]]); instability gives $Sq^I\iota_q=0$ for admissible $I$ with excess greater than $q$ ([[prop-steenrod-square-normalization-instability-and-top-square]], [[def-mod-two-square-algebra-admissible-sequences-and-excess]]).

[F2] The path-loop input lemma identifies the strict loop fiber's mod-two cohomology ring with that of $K_q$ through the marked weak equivalence ([[lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs]]), and the relative-lifts lemma computes the transgression and survival of the corresponding classes ([[lem-relative-lifts-produce-cohomological-transgressions]]).

[F3] The Borel polynomial base theorem applies to the actual fibration once its simple system and transgression data are supplied ([[thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system]]); AC underpins the basis and model choices ([[def-axiom-of-choice]]), and squares are natural; the top-square identity identifies the indicated powers ([[thm-steenrod-squares-are-well-defined-and-natural]]).

## Proof

**Proof technique:** direct.

1.1 First establish the excess bookkeeping. If $I=(i_1,\ldots,i_k)$ is admissible, then $i_1=e(I)+i_2+\cdots+i_k$. Thus when $e(I)>q$, instability gives $Sq^I\iota_q=0$. When $e(I)=q$, the outermost square is the top square of its input, so $$Sq^I\iota_q=(Sq^{(i_2,\ldots,i_k)}\iota_q)^2.$$ The tail's excess is at most $e(I)$, because subtracting the tail excess gives $i_1-2i_2\ge0$. Continue deleting heads whenever the excess remains $q$; length strictly decreases, and the empty tail has excess zero. This expresses the class uniquely as a $2^t$th power of an admissible class with excess less than $q$. Conversely, if a tail $J$ is admissible with $e(J)\le q$, prepend $q+|J|$. This new head is at least twice the first tail entry, since that inequality is equivalent to $e(J)\le q$. The new sequence is admissible, has excess exactly $q$, and represents the square of $Sq^J\iota_q$. Iterating gives precisely all these powers. The deletion/prepending constructions are inverse on sequences; they do not rely on an unproved independence of their values. [given, F1]

2.1 Induct on $q$. The marked projective-space model proves the base $q=1$, where the only admissible excess-zero sequence is the empty sequence. Suppose the polynomial statement holds for $K_q$. A monomial in its polynomial generators has a unique expression as a product of distinct elements $$(Sq^J\iota_q)^{2^t},\qquad e(J)<q,\quad t\ge0,$$ by writing each exponent in binary. Hence these classes form a simple system of generators: their distinct finite products are a vector-space basis. The preceding inverse constructions index this simple system **bijectively** by all admissible $I$ with $e(I)\le q$. It is degreewise finite because there are finitely many finite positive integer sequences of each fixed sum and each power has positive degree. [step 1.1, F1, F3]

3.1 Apply the actual path fibration supplied by the path-loop input lemma with strict fiber $F=\Omega K_{q+1}$. Its marked weak equivalence $h:K_q\to F$ identifies their mod-two cohomology rings. Transfer the polynomial generators and simple system from $K_q$ to $F$ by the inverse of $h^*$; this inverse commutes with squares because $h^*$ is a natural cohomology isomorphism. Write $\iota_q$ for the resulting marked fundamental fiber class, as in the normalized-relative-lift lemma. The normalized-relative-lift lemma gives $\delta\iota_q=p^*\iota_{q+1}$. Repeated use of the connector-compatibility lemma and square naturality gives, for every admissible $I$, $$\delta(Sq^I\iota_q)=p^*(Sq^I\iota_{q+1}).$$ Therefore each simple-system element, of degree $m=q+|I|$, survives every earlier page and has its cohomological transgression on the exact page $m+1=q+|I|+1$, with representative $Sq^I\iota_{q+1}$, by the relative-lifts lemma. This includes all top-square powers; no unsupported assertion about a square's “expected” differential is needed. [step 2.1, F2, F3]

4.1 All hypotheses of the Borel polynomial-base theorem now hold: the total path space is contractible, the base is simply connected, the actual strict fiber cohomology ring and marking are computed by the local weak-equivalence argument of the path-loop input lemma, the simple system is degreewise finite, and all its elements have the exhibited relative lifts. That theorem identifies base cohomology as the polynomial algebra on $Sq^I\iota_{q+1}$ indexed by $e(I)\le q$, which is exactly $e(I)<q+1$. This proves the induction step, simultaneously proving generation and algebraic independence. All infinite index sets are used degree by degree with finite support, and strong Serre convergence is the actual published convergence statement. [step 3.1, F3]

5.1 **Explicit fiber boundary check.** In the step with base $K_q$, the fiber is $K_{q-1}$. Its degree $2q-2$ is **not** dropped. By the proved full polynomial statement it consists of the degree-$2q-2$ generators (admissible sequences of operation degree $q-1$ and excess less than $q-1$) together with the single product $\iota_{q-1}^2$. The latter is the simple-system element $Sq^{q-1}\iota_{q-1}$, of excess $q-1$. Its relative lift is $Sq^{q-1}\iota_q$, so the relative-lifts lemma places its differential on page $2q-1$, from $(0,2q-2)$ to $(2q-1,0)$. Thus the previously missing fiber boundary class supplies the necessary base-degree-$2q-1$ generator. For $q=2$ this says that the square of the degree-one fiber class transgresses on page three. The polynomial induction handles this class and all other powers before any strict-range truncation is made. [step 4.1, F1] ∎
