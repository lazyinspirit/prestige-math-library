---
id: fs-l-equals-v-in-zf
kind: false-statement
title: "False statement: ZF proves L equals V"
status: draft
origin: pipeline
deps: [thm-formal-consistency-of-zfc-plus-gch-from-zf, lem-finite-support-constructibility-absoluteness, prop-atomless-generics-are-not-ground-model-elements, thm-forcing-preserves-ordinals, lem-forcing-transfer-for-finite-zfc-fragments, thm-finite-fragment-relative-consistency-transfer]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Kunen, Set Theory, Chapter VI Theorem 3.8 pp. 171–172 and Chapter VII section 1 pp. 184–186"
      url: https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Set/Kunen1980SetTheory-AnIntroductionToIndependenceProofs.pdf
justified_by: []
forward_refs: []
---

## Statement

False statement: because ZF proves $L$ is an inner model of
$\mathrm{ZFC}+V=L$, ZF therefore proves $V=L$.

Assuming externally $\operatorname{Con}(\mathrm{ZF})$, the displayed
conclusion is false: ZF does not prove $V=L$. The consistency hypothesis is
essential to this metamathematical refutation.

## Facts & Assumptions

**Given:** External $\operatorname{Con}(\mathrm{ZF})$ and the fixed sentence
presentations used by F1, F5 and F6.

[F1] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] gives
$\operatorname{Con}(\mathrm{ZF})\to
\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$, hence in particular
$\operatorname{Con}(\mathrm{ZF})\to\operatorname{Con}(\mathrm{ZFC})$.

[F2] [[lem-finite-support-constructibility-absoluteness]] supplies one fixed
finite fragment $K_L\subseteq\mathrm{ZF}$ such that transitive $K_L$-models
with the same ordinals have the same internal $L$, contained in the smaller
model.

[F3] [[prop-atomless-generics-are-not-ground-model-elements]] says that an
atomless generic filter is not an element of its transitive ground model.

[F4] [[thm-forcing-preserves-ordinals]] says that a generic extension and its
transitive ground model have exactly the same ordinals.

[F5] [[lem-forcing-transfer-for-finite-zfc-fragments]] supplies, for each
external finite target fragment and its finite formal forcing verification, a
finite source fragment and ZFC proofs of source-model existence and conversion
to a model of the target fragment. It asserts no uniform arithmetic proof
constructor.

[F6] [[thm-finite-fragment-relative-consistency-transfer]] converts those two
ZFC proofs for every external finite fragment of an explicitly countable
theory $U$ into the external implication
$\operatorname{Con}(\mathrm{ZFC})\to\operatorname{Con}(U)$.

## Refutation

1.1 Let $P=2^{<\omega}$, ordered by extension, with stronger strings below weaker ones. Appending $0$ and appending $1$ gives two incompatible stronger conditions below every $p$, so $P$ is nonempty and atomless. If $M$ is a transitive ground model containing $P$ and $G$ is $M$-generic, F3 gives $G\notin M$, while the generic-extension construction gives $G\in M[G]$. [F3, construct]

2.1 If the ground and extension satisfy $K_L$, F4 gives them the same ordinals and F2 gives $L^{M[G]}=L^M\subseteq M$. Step 1.1 then gives $G\in M[G]\setminus L^{M[G]}$, and therefore $M[G]\models V\ne L$. [F2, F4, step 1.1]

3.1 Put $U=\mathrm{ZFC}+\neg(V=L)$ and fix an external finite $\Delta\subseteq U$. Let $\Delta_0$ be its ZFC-labelled members. Enlarge $\Delta_0$ by $K_L$ and by the finitely many target-side ZF instances used in the fixed proofs of generic-extension transitivity, membership of $G$ in the extension and ordinal preservation. For each sentence in this finite enlarged list, expand the corresponding forcing-theorem and extension-axiom proof for $P=2^{<\omega}$. Also retain on the source side $K_L$ and the finitely many instances used to construct $P$, enumerate the ground dense sets, prove the direct atomlessness argument of step 1.1 and carry out the rank proof behind F4. This is one finite formal forcing verification, obtained separately for this fixed $\Delta$; it makes no uniform assertion over coded fragments. [F2, F3, F4, F5, step 1.1, step 2.1]

4.1 Apply F5 to the verification in step 3.1. It gives a finite $\Gamma\subseteq\mathrm{ZFC}$ and ZFC proofs of a countable transitive $\Gamma$-model $M$ and of the corresponding extension $N=M[G]$ satisfying the enlarged target list. The retained source requirements make $M$ a $K_L$-model; the enlarged target list makes $N$ a $K_L$-model. The retained fixed proof blocks give $G\in N\setminus M$ and equality of their ordinals, so F2 gives $N\models\neg(V=L)$. Consequently the same ZFC conversion proof ends with a set model of the original $\Delta$, including its extra axiom when that axiom occurs. [F2, F5, step 1.1, step 2.1, step 3.1]

5.1 Since step 4.1 supplies the two stipulated ZFC proofs for every external finite $\Delta\subseteq U$, F6 yields externally $\operatorname{Con}(\mathrm{ZFC})\to\operatorname{Con}(\mathrm{ZFC}+\neg(V=L))$. Together with F1, the stated $\operatorname{Con}(\mathrm{ZF})$ hypothesis therefore gives $\operatorname{Con}(\mathrm{ZFC}+\neg(V=L))$. [F1, F6, step 4.1]

6.1 Suppose instead that ZF proved $V=L$. The same finite derivation is a ZFC derivation. Appending it to the distinguished axiom $\neg(V=L)$ and then the fixed propositional contradiction block would be a $\mathrm{ZFC}+\neg(V=L)$ refutation, contrary to step 5.1. Hence, assuming $\operatorname{Con}(\mathrm{ZF})$, ZF does not prove $V=L$. The inner-model theorem proves a relativized assertion about the subclass $L$; it does not identify every ambient set with a constructible set. [assume-contra, step 5.1, discharge-contradiction] ∎
