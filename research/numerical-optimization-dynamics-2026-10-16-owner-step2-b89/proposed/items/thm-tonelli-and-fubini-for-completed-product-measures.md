---
id: thm-tonelli-and-fubini-for-completed-product-measures
kind: theorem
title: "Tonelli and Fubini for the completed product, with only almost-everywhere section measurability"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completed-product-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-completion-measurable-functions-have-base-measurable-representatives, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-ae-equality-preserves-measurability-on-complete-spaces, def-integrable-real-and-complex-functions-and-their-integrals, def-countable-choice, def-nonnegative-lebesgue-integral, lem-well-definedness-of-the-simple-integral, def-completion-of-a-measure-space, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (thm-tonelli-and-fubini-for-completed-product-measures). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.39"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 5.21"
      url: "https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), and let
$\overline{\mu \times \nu}$ be the completed product of two sigma-finite
measure spaces.

1. If $f : X \times Y \to [0,\infty]$ is $\overline{\mu \times \nu}$-measurable, there are measurable null sets $A\subseteq X$ and $B\subseteq Y$ such that $f_x$ is $\overline{\mathcal B}$-measurable for $x\notin A$ and $f^y$ is $\overline{\mathcal A}$-measurable for $y\notin B$. Define $I_f(x)=\int_Y f_x\,d\overline\nu$ for $x\notin A$ and $I_f(x)=0$ on $A$; define $J_f(y)=\int_X f^y\,d\overline\mu$ for $y\notin B$ and $J_f(y)=0$ on $B$. Then $I_f,J_f$ are measurable and
$$\int f\,d\overline{\mu \times \nu}=\int_X I_f\,d\mu=\int_Y J_f\,d\nu.$$
2. If $f \in L^1(\overline{\mu \times \nu})$, there are measurable null sets $A\subseteq X$ and $B\subseteq Y$ such that the sections are measurable and integrable outside them. Define $I_f,J_f$ by the same section integrals outside $A,B$ and by zero on $A,B$. They are measurable and integrable, and the same equality holds.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, two sigma-finite measure spaces, their completed product $\overline{\mu \times \nu}$, and either a nonnegative $\overline{\mu \times \nu}$-measurable function $f$ or an integrable function $f \in L^1(\overline{\mu \times \nu})$.

[L1] Assuming countable choice, a function measurable for a completion is almost everywhere equal to one measurable for the original sigma-algebra. ([[thm-completion-measurable-functions-have-base-measurable-representatives]])

[L2] Tonelli and Fubini hold on the uncompleted product sigma-algebra. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[L3] Once both functions are integrable, the integral is unchanged by almost-everywhere equality. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[L4] On a complete measure space, almost-everywhere equality with a measurable function implies measurability. ([[thm-ae-equality-preserves-measurability-on-complete-spaces]])

[L5] Integrable complex functions have integrable real and imaginary parts. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L6] The nonnegative integral is the supremum over nonnegative simple minorants ([[def-nonnegative-lebesgue-integral]]); simple integrals are computed by finite level-set sums, independently of representation ([[lem-well-definedness-of-the-simple-integral]]). A completed measurable set is $E=A\cup N$ with $A$ base measurable, $N$ contained in a base measurable null set, and $\overline\mu(E)=\mu(A)$ ([[def-completion-of-a-measure-space]]). A nonnegative measurable function has integral zero exactly when it is zero almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 We first justify two nonnegative transfer rules, allowing infinite integrals. On any measure space, if measurable $p,q\ge0$ agree outside a measurable null set $Z$, take a nonnegative simple $s\le p$ and replace each positive level set $E_j$ by $E_j\setminus Z$, assigning zero on $Z$. The resulting simple $s_0$ is bounded by $q$ and has the same integral as $s$, since removing a measurable null set does not change a level-set measure. Zero coefficients contribute zero even on infinite-measure sets by [L6]. Taking suprema of simple minorants gives $\int p\le\int q$; reversing them gives equality, without assuming finiteness. Also, for a base-measurable $p\ge0$, its integral is unchanged on completion: every base simple minorant is a completed one, while for a completed simple minorant $s=\sum_j c_j\mathbf1_{E_j}\le p$, [L6] supplies base sets $A_j\subseteq E_j$ with $\mu(A_j)=\overline\mu(E_j)$. Taking the disjoint level-set representation makes the $A_j$ disjoint. The base simple function $s_0=\sum_j c_j\mathbf1_{A_j}\le s\le p$ has the same integral; the two suprema are therefore equal. Only finitely many representatives are needed for any one simple function. These rules also give agreement of the signed or complex integrals on passing to completion once the absolute integral is finite, by applying them to the positive and negative real and imaginary parts in [L5]. [L5, L6, given, algebra]

1.2 In the nonnegative branch, [L1] gives a product-measurable extended-real function $g$ such that $f=g$ almost everywhere for $\overline{\mu \times \nu}$. Let $N:=\{(x,y): f(x,y)\ne g(x,y)\}$, so $\overline{\mu \times \nu}(N)=0$. By the completion definition, choose a product-measurable null set $Z$ with $N \subseteq Z$. [L1, choose]

2.1 Apply Tonelli in [L2] to $\mathbf 1_Z$. Since $(\mu \times \nu)(Z)=0$, it gives $$\int_X \nu(Z_x)\,d\mu = 0,\qquad \int_Y \mu(Z^y)\,d\nu = 0.$$ The functions $x\mapsto\nu(Z_x)$ and $y\mapsto\mu(Z^y)$ are measurable, so $A:=\{x:\nu(Z_x)>0\}$ and $B:=\{y:\mu(Z^y)>0\}$ are measurable null sets by the zero-integral criterion in [L6]. For $x\notin A$, $f_x=g_x$ outside the null section $Z_x$; [L4] makes $f_x$ measurable for the completed factor measure. The analogous statement holds for $y\notin B$. [L2, L4, L6, step 1.2]

3.1 In the nonnegative case replace $g$ by $g^+=\max(g,0)$. Since $f\ge0$ and $f=g$ outside $Z$, one has $f=g^+$ there, both on the product and on sections outside $A,B$. Apply uncompleted Tonelli [L2] to $g^+$, with its base-measurable section-integral functions $I_g,J_g$. For each $x\notin A$, step 1.1 first transfers the section integral of $g^+$ to the completed factor and then transfers it to the equal-almost-everywhere $f_x$; thus $I_f(x)=I_g(x)$, and likewise $J_f=J_g$ outside $B$. The definitions set $I_f=0$ on the base-measurable set $A$ and $J_f=0$ on $B$, so these are base-measurable functions obtained by measurable piecewise gluing, not by an unqualified almost-everywhere measurability assertion on an incomplete space. Step 1.1 gives equal outer nonnegative integrals despite possible infinity, and also $\int f\,d\overline{\mu\times\nu}=\int g^+\,d(\mu\times\nu)$. Tonelli gives the asserted three-way equality. [L2, L4, L6, step 1.1, step 1.2, step 2.1]

4.1 If $f\in L^1(\overline{\mu\times\nu})$, apply [L1] separately to its finite real and imaginary parts, obtaining base-measurable extended-real $u,v$ equal to them almost everywhere. Their nonfinite sets are base measurable and null, because the completed measure extends the base measure; set $u,v$ to zero there and put $g=u+iv$. By completion there is a base-measurable null cover $Z$ of $\{f\ne g\}$. Applying the nonnegative rules of step 1.1 to $|f|,|g|$ gives $\int|g|\,d(\mu\times\nu)=\int|f|\,d\overline{\mu\times\nu}<\infty$, so $g$ is in base $L^1$ before invoking Fubini or [L3]. Fubini [L2] gives base-measurable null exceptional parameter sets for the integrability of its sections. Enlarge them by the null-section exceptional sets obtained from $Z$ as in step 2.1. Outside the enlarged $A,B$, [L4] makes the real and imaginary $f$ sections measurable on the completed factor; step 1.1 applied to absolute values shows their integrals finite, so both sections are integrable before [L3] equates their integrals. Step 1.1 also identifies the base and completed integrals of each integrable $g$ section. Hence $I_f,J_f$ equal the base Fubini section functions outside the base-measurable null sets $A,B$ and are zero on those sets. Piecewise gluing makes them base measurable, and step 1.1 applied to their absolute values proves integrability. Now [L3] equates the outer integrals; on the completed product, $f$ and $g$ are already integrable and equal almost everywhere, so [L3] followed by completion agreement in step 1.1 equates their product integrals as well. This proves the stated equality in the real and complex cases. [L1, L2, L3, L4, L5, L6, step 1.1, step 2.1] ∎
