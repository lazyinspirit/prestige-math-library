---
id: lem-tdmath-cost-offset-difference-space-well-defined
kind: lemma
title: The cost-zero offset construction is a real vector space
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 17
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-decorated-chain-costs, lem-tdmath-decorated-cost-algebra, def-tdmath-cost-offset-difference-space]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-decorated-chain-costs: mathematical-premise
  lem-tdmath-decorated-cost-algebra: mathematical-premise
  def-tdmath-cost-offset-difference-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B, pp. 76–79"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

For the construction in [[def-tdmath-cost-offset-difference-space]], $\approx_0$ is an equivalence compatible with product and positive scaling; $V_F$ is a real vector space and its displayed operations are representative-independent.

## Facts & Assumptions

**Given:** The decorated cost algebra, type composition and scaling, and the formal pair relation in the Definition.

[F1] [[def-tdmath-cost-offset-difference-space]]: types are identified at zero cost in both directions, and a pair difference is identified after adding a common catalyst type.

[F2] [[lem-tdmath-decorated-cost-algebra]]: costs satisfy nonnegative closed-cycle bounds, triangle inequalities, translation invariance, and positive homogeneity.

[A1] [[def-tdmath-forward-sector-hypotheses]]: reversible splitting and recombination are allowed for every positive scaled amount.

## Proof

1.1 The relation $\approx_0$ is reflexive because $F(\Gamma,\Gamma)=0$, and symmetric by definition. Suppose $\Gamma\approx_0\Gamma'$ and $\Gamma'\approx_0\Gamma''$. The triangle inequality gives both directed costs between $\Gamma$ and $\Gamma''$ at most zero. For any $\epsilon>0$, choose a finite reverse witness of cost $d<\epsilon$; such a witness exists because the reverse infimum is at most zero; a value below $\epsilon$ must exist by the greatest-lower-bound convention, even if that infimum were initially $-\infty$. Every forward witness of cost $c$ closes with it, so [F2] gives $c+d\ge0$, hence $c>-\epsilon$. Letting $\epsilon\downarrow0$ shows every forward witness has nonnegative cost and its infimum is at least zero; the same argument reverses the direction. Both infima are therefore zero, proving transitivity. The same argument proves product compatibility: subadditivity makes both product costs at most zero, and any finite reverse witness bounds every forward product witness below by a quantity tending to zero. Positive homogeneity gives scaling compatibility directly. Thus $\approx_0$ is an equivalence compatible with product and positive scaling, and the quotient is a commutative monoid. [F1, F2, algebra]

1.2 Reversible splitting [A1] gives accessible transitions in both directions between $(s+t)\Gamma$ and $s\Gamma\times t\Gamma$. Extensivity makes each such edge have zero entropy cost. Any reverse witness bounds all forward costs below by [F2]'s closed-cycle inequality, so both infima are zero. Hence $(s+t)\Gamma\approx_0 s\Gamma\times t\Gamma$. The empty type $1$ is an identity under composition; its reassociation and permutation identifications have zero cost by the type conventions. [A1, F1, F2]

2.1 The pair relation $\equiv$ is reflexive using unit catalyst $1$ and symmetric by swapping the two sides. Suppose $(A,B)\equiv(A',B')$ via catalyst $C$, and $(A',B')\equiv(A'',B'')$ via catalyst $D$. Their witnesses are
$A\times B'\times C\approx_0 A'\times B\times C,\qquad
A'\times B''\times D\approx_0 A''\times B'\times D.$
Multiply the first equivalence by $B''\times D$, the second by $B\times C$, and compose. Reassociating and permuting gives
$A\times B''\times(B'\times C\times D)\approx_0 A''\times B\times(B'\times C\times D),$
which witnesses $(A,B)\equiv(A'',B'')$. Hence $\equiv$ is an equivalence relation. [F1, step 1.1, algebra]

3.1 Suppose $(A,B)\equiv(A',B')$ via $C$, so $A\times B'\times C\approx_0 A'\times B\times C$. For an arbitrary pair $(D,E)$, multiply this witness by $D\times E$. Reassociation gives $(A\times D)\times(B'\times E)\times C\approx_0(A'\times D)\times(B\times E)\times C$, exactly the witness for $(A\times D,B\times E)\equiv(A'\times D,B'\times E)$. Apply the same argument to a change of representative of $(D,E)$ and use transitivity; addition is representative-independent. Scaling a catalyst witness by $t>0$ and using product compatibility from step 1.1 proves that positive scalar multiplication is representative-independent. Product commutativity and associativity give the additive laws, and the empty type gives $(A\times1,B\times1)=(A,B)$. Swapping a pair gives an inverse: its sum with $(A,B)$ is $(A\times B,B\times A)$, equivalent to $(1,1)$ with unit catalyst because the two product types agree up to permutation and have zero cost in both directions. Thus the classes form an abelian group with zero $[(1,1)]$. [F1, F2, step 1.1, step 2.1]

4.1 For $t>0$, the displayed operation $t(A,B)=(tA,tB)$ satisfies $t(v+w)=tv+tw$ because scaling distributes over type composition, and $t(sv)=(ts)v$ for $s>0$ by associativity of type scaling. Also $1v=v$. The scalar-addition law for positive $s,t$ follows from step 1.2:
$(s+t)[A,B]=[(s+t)A,(s+t)B]=[sA\times tA,sB\times tB]=s[A,B]+t[A,B].$
The zero scalar is defined as the additive identity, and $(-t)v$ is defined as $t(-v)$, where $-v$ swaps the pair. [F1, step 1.2, step 3.1]

5.1 The positive scalar laws extend to negative scalars by swapping pairs. For the scalar-addition law with opposite signs, write $s-t$ with $s,t\ge0$. If $s\ge t$, positive scalar addition gives $sv=(s-t)v+tv$, so cancellation in the additive group gives $(s-t)v=sv-tv$; if $t>s$, apply the same identity to $t=(t-s)+s$ and negate. Cases with zero are immediate. For scalar composition, write each nonzero scalar as its sign times a positive magnitude; the defined action swaps the pair once for each negative sign and scales by the product of magnitudes, so $(rs)v=r(sv)$, with zero cases immediate. For distributivity over vector addition, positive scalars distribute by step 4.1 and a negative scalar distributes by taking the additive inverse of that identity. Together with the abelian-group laws in step 3.1, these are all real-vector-space axioms. [F1, step 4.1, step 3.1, algebra] ∎
