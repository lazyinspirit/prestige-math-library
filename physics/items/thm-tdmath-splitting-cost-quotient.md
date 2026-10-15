---
id: thm-tdmath-splitting-cost-quotient
kind: theorem
title: No-sinks cost offsets give a weak global entropy
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 18
deps: [def-axiom-of-choice, def-tdmath-forward-sector-hypotheses, def-tdmath-decorated-chain-costs, lem-tdmath-decorated-cost-algebra, def-tdmath-cost-offset-difference-space, lem-tdmath-cost-offset-difference-space-well-defined, thm-tdmath-unattained-cost-entropy-inference, thm-tdmath-infinite-no-sinks-sandwich]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-decorated-chain-costs: mathematical-premise
  lem-tdmath-decorated-cost-algebra: mathematical-premise
  def-tdmath-cost-offset-difference-space: mathematical-premise
  lem-tdmath-cost-offset-difference-space-well-defined: mathematical-premise
  thm-tdmath-unattained-cost-entropy-inference: mathematical-premise
  thm-tdmath-infinite-no-sinks-sandwich: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B, pp. 76–80"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Assume the Axiom of Choice. Let $F$ be the decorated cost of [[def-tdmath-decorated-chain-costs]], and assume the **no-sinks condition**

$$F(\Gamma,\Gamma')<+\infty\quad\Longleftrightarrow\quad F(\Gamma',\Gamma)<+\infty$$

for every type pair. Let $V_F$ be the real difference space of [[def-tdmath-cost-offset-difference-space]]. Then there is an additive extensive offset $B:\mathcal G\to\mathbb R$ such that

$$-F(\Gamma',\Gamma)\le B(\Gamma)-B(\Gamma')\le F(\Gamma,\Gamma').$$

If every admitted cross-type transition $x\prec y$ from $\Gamma$ to $\Gamma'$ satisfies the calibrated cost inequality of [[thm-tdmath-unattained-cost-entropy-inference]], then $\sigma_\Gamma(x)+B(\Gamma)$ is nondecreasing across every such transition. Only this weak inequality is asserted; no-gap equalities and strict extensions are not concluded.

## Facts & Assumptions

**Given:** The no-sinks condition, A1–A6 for cross-type transitions, the finite-chain costs, and the Axiom of Choice.

[A1] [[def-axiom-of-choice]]: adopt AC for the Hahn–Banach dominated-extension and basis-extension steps in the vector-space supplier.

[F1] [[def-tdmath-cost-offset-difference-space]] and [[lem-tdmath-cost-offset-difference-space-well-defined]]: $V_F$ is a real vector space of formal type differences, with composition additive and positive scaling homogeneous.

[F2] [[lem-tdmath-decorated-cost-algebra]]: $F(\Gamma,\Gamma)=0$, $F$ is translation-invariant, positively homogeneous and subadditive, finite reverse witnesses bound forward costs, and costs have no negative cycles.

[F3] [[thm-tdmath-infinite-no-sinks-sandwich]]: under AC, a sublinear $p:V\to\mathbb R\cup\{+\infty\}$ with $p(0)=0$ and symmetric finite domain admits a linear $L$ with $-p(-v)\le L(v)\le p(v)$.

[F4] [[thm-tdmath-unattained-cost-entropy-inference]]: every admitted transition $x\prec y$ satisfies $\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)\ge F(\Gamma,\Gamma')$.

## Proof

**Given:** [A1], [F1]–[F4], and the no-sinks condition.

1.1 If $F(\Gamma,\Gamma')<+\infty$, no-sinks gives a finite reverse witness of some real cost $c$. Concatenating it with any forward witness makes a closed chain, so [F2] gives forward cost at least $-c$. Thus $F(\Gamma,\Gamma')>-\infty$ whenever it is finite; all cost values are in $\mathbb R\cup\{+\infty\}$. [A1, F2, given]

2.1 For a pair class $v=[\Gamma,\Gamma']\in V_F$, define $p(v):=F(\Gamma,\Gamma')$. Suppose $(\Gamma,\Gamma')\equiv(\Lambda,\Lambda')$ via $C$, so $P=\Gamma\times\Lambda'\times C\approx_0 Q=\Lambda\times\Gamma'\times C$. Put $D=\Gamma'\times\Lambda'\times C$. Since $P\approx_0 Q$, the triangle inequality gives $F(P,D)\le F(Q,D)$ and $F(Q,D)\le F(P,D)$; the costs have no $-\infty$ by step 1.1, so these inequalities imply equality. Catalyst invariance from [F2] gives $F(P,D)=F(\Gamma,\Gamma')$ and $F(Q,D)=F(\Lambda,\Lambda')$. Therefore $p$ is independent of the pair representative. [F1, F2, step 1.1, algebra]

2.2 The identity $F(\Gamma,\Gamma)=0$ gives $p(0)=0$. Homogeneity of $F$ gives $p(tv)=tp(v)$ for $t>0$, and its product subadditivity gives $p(v+w)\le p(v)+p(w)$. The no-sinks condition says $p(v)<+\infty$ exactly when $p(-v)<+\infty$. By step 1.1, $p$ has no $-\infty$ value. [F1, F2, given, step 1.1]

3.1 Apply [F3] to $V_F$ and $p$. It gives a real-linear $L:V_F\to\mathbb R$ with $-p(-v)\le L(v)\le p(v)$ for all $v$. Put $B(\Gamma)=L([\Gamma,1])$, where $1$ is the empty unit type. Since $[\Gamma\times\Gamma',1]=[\Gamma,1]+[\Gamma',1]$, $B$ is additive. Since $[t\Gamma,1]=t[\Gamma,1]$ (the unit type satisfies $t1=1$), $B(t\Gamma)=tB(\Gamma)$ for $t>0$. Also $[\Gamma,\Gamma']=[\Gamma,1]-[\Gamma',1]$, so applying the sandwich to this pair gives the displayed two-sided cost bound. [A1, F1, F3, step 2.2, algebra]

4.1 For an admitted transition, [F4] gives $\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)\ge F(\Gamma,\Gamma')$, while step 3.1 gives $B(\Gamma)-B(\Gamma')\le F(\Gamma,\Gamma')$. Subtracting the latter from the former yields
$[\sigma_{\Gamma'}(y)+B(\Gamma')]-[\sigma_\Gamma(x)+B(\Gamma)]\ge0.$
Thus the offset entropy is nondecreasing across every admitted transition. [F4, step 3.1, algebra] ∎
## Remarks

The no-sinks condition is an explicit hypothesis about cross-type reachability. AC is used by [[thm-tdmath-infinite-no-sinks-sandwich]] and is carried here. The result does not assert a no-gap condition, a unique offset, or an exact entropy principle for all transitions.
