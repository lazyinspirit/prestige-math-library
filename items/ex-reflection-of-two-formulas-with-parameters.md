---
id: ex-reflection-of-two-formulas-with-parameters
kind: example
title: "Reflecting a finite family with parameters"
status: published
origin: pipeline
deps: [thm-montague-levy-finite-reflection, cor-transitive-models-of-each-finite-zf-fragment]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — Theorem 4.3 pp10–11"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Example

For fixed formulas $\phi(x),\psi(x,y)$ and a set $a$, there is $\beta$ with $a\in V_\beta$ such that both formulas are absolute on every tuple from $V_\beta$. For instance take $a=\{\varnothing\}$, $\phi(x)\equiv\exists z(x\in z)$ and $\psi(x,y)\equiv\exists z(x\in z\land y\in z)$.

## Facts & Assumptions

[F1] [[thm-montague-levy-finite-reflection]]: In ZF, for each fixed finite family $\Phi$ and every ordinal $\alpha$, some $\beta>\alpha$ makes $\Phi$ absolute between $V_\beta$ and $V$, for all tuples in $V_\beta$. More generally the same holds between $W_\beta$ and $W$ for a definable increasing continuous hierarchy of sets exhausting a definable nonempty class $W$. For an empty class, the relativization statement is interpreted as a scheme rather than satisfaction in an empty structure.

[F2] [[cor-transitive-models-of-each-finite-zf-fragment]]: For each fixed external finite $\Gamma\subseteq\mathrm{ZF}$, ZF proves that some transitive $V_\beta$ satisfies $\Gamma$, with $\beta$ above any prescribed ordinal bound. In ZFC the analogous scheme holds for fixed finite $\Gamma\subseteq\mathrm{ZFC}$. These are schemes indexed by external fragments, not a single internal assertion of models for all coded fragments.

## Verification

**Given:** A fixed pair of formulas and a set parameter; the displayed instance uses von Neumann ranks.

1.1 In the instance, $\operatorname{rank}(a)=1$ and the witnesses for $\phi(a)$ and $\psi(a,a)$ can both be $\{a\}$. It has rank $2$, so it lies in $V_3$, while $a\in V_2$. Thus the witness may require a later stage than the parameter. [given, algebra]

2.1 For the general pair, close both formulas under subformulas and apply F1 starting above $\operatorname{rank}(a)+1$. The produced $\beta$ contains $a$ and reflects every formula of this finite closure. In particular it reflects the two original formulas at all tuples in $V_\beta$, not merely at the named instance. Applying F2 is an additional option when the displayed formulas include a fixed axiom fragment. [F1, F2, step 1.1]

3.1 Choosing only witnesses for the two formulas at $a$ would not cover their subformula instances at the new witnesses and at all other parameters in $V_\beta$. The construction in F1 bounds every existential subformula at every tuple from each stage and iterates those bounds. That is why its conclusion supplies the required all-tuple agreement. [F1, step 2.1] ∎
