---
id: thm-group-actions-and-group-ring-modules-correspond
kind: theorem
title: "For a commutative ring $R$, $R$-linear $G$-actions are exactly the compatible left $R[G]$-module structures"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-g-module-over-a-commutative-ring, def-group-ring, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, thm-group-ring-is-a-unital-algebra-with-basis-g, thm-universal-property-of-free-modules]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 1.1.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $G$ be a group, and let $M$ be a left
$R$-module. Then:

1. every $R$-linear action of $G$ on $M$ extends uniquely to a left
   $R[G]$-module structure on $M$ satisfying
   $$(r[e]) \cdot m=rm\qquad(r \in R,\ m \in M);$$
2. every left $R[G]$-module structure on $M$ satisfying
   $$(r[e]) \cdot m=rm\qquad(r \in R,\ m \in M)$$
   restricts to an $R$-linear action of $G$ on $M$;
3. these two constructions are inverse to each other.

Moreover, if $M$ and $N$ carry the corresponding structures, then an
$R$-linear map $f:M \to N$ is $G$-equivariant if and only if it is an
$R[G]$-module homomorphism.

## Facts & Assumptions

**Given:** A commutative ring $R$, a group $G$, and left $R$-modules $M$ and $N$.

[L1] The group ring $R[G]$ has basis vectors $[g]$, multiplication $[g][h]=[gh]$, identity $[e]$, and central scalar copy $r \mapsto r[e]$ ([[thm-group-ring-is-a-unital-algebra-with-basis-g]], [[def-group-ring]]).

[L2] An $R$-linear $G$-module is a left $R$-module together with a group action whose each $g$-operator is $R$-linear ([[def-g-module-over-a-commutative-ring]]).

[L3] Every set map from $G$ to a left $R$-module extends uniquely to an $R$-module homomorphism from $R[G]$ ([[thm-universal-property-of-free-modules]]).

[L4] An $R[G]$-module homomorphism is a map compatible with addition and with the scalar action of every element of $R[G]$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-left-and-right-modules]]).

## Proof

**Proof technique:** constructive.

1.1 Assume first that $M$ is an $R$-linear $G$-module. For each $m \in M$, the map $u_m:G \to M$, $u_m(g):=g \cdot m$, extends uniquely by [L3] to an $R$-linear map $\widetilde{u}_m:R[G] \to M$. Define $a \cdot m:=\widetilde{u}_m(a)$ for $a \in R[G]$. [L1, L2, L3, given, construct]

2.1 For basis elements, $[g] \cdot m=g \cdot m$ by construction. If $a=\sum_{g \in F} r_g[g]$, then $a \cdot m=\sum_{g \in F} r_g(g \cdot m)$, so the action is additive in $a$ and, because each $g$-operator is $R$-linear by [L2], also additive in $m$ and compatible with the scalar action of $R$ on $M$. [step 1.1, L1, L2]

3.1 For $g,h \in G$, one has $([g][h]) \cdot m=[gh] \cdot m=(gh) \cdot m=g \cdot (h \cdot m)=[g] \cdot ([h] \cdot m)$. Since both sides are $R$-bilinear in the two group-ring variables, the equality extends to $(ab) \cdot m=a \cdot (b \cdot m)$ for all $a,b \in R[G]$. Also $[e] \cdot m=e \cdot m=m$, so the identity of $R[G]$ acts as the identity on $M$, and $(r[e]) \cdot m=r(e \cdot m)=rm$. Thus the construction of steps 1.1-2.1 gives a compatible left $R[G]$-module structure on $M$. [step 2.1, L1, L2, given, algebra]

4.1 Conversely, assume $M$ is a left $R[G]$-module compatible with the given $R$-module structure, meaning that $(r[e]) \cdot m=rm$ for all $r \in R$ and $m \in M$. Define $g \cdot m:=[g] \cdot m$. Then $e \cdot m=[e] \cdot m=m$, and $(gh) \cdot m=[gh] \cdot m=([g][h]) \cdot m=[g] \cdot ([h] \cdot m)=g \cdot (h \cdot m)$, so this is a group action. For $r \in R$, one has $g \cdot (rm)=[g] \cdot ((r[e]) \cdot m)=(([g](r[e])) \cdot m)=(((r[e])[g]) \cdot m)=(r[e]) \cdot ([g] \cdot m)=r(g \cdot m)$. Thus the restricted action is $R$-linear. [step 3.1, L1, L2, L4, given, algebra]

5.1 Let $f:M \to N$ be $R$-linear. If $f$ is an $R[G]$-module homomorphism, then $f(g \cdot m)=f([g] \cdot m)=[g] \cdot f(m)=g \cdot f(m)$, so $f$ is $G$-equivariant. Conversely, if $f$ is $G$-equivariant and $a=\sum_{g \in F} r_g[g]$, then $f(a \cdot m)=\sum_{g \in F} r_g f(g \cdot m)=\sum_{g \in F} r_g(g \cdot f(m))=a \cdot f(m)$, so $f$ is an $R[G]$-module homomorphism. [step 2.1, step 4.1, L1, L4, given, algebra]

6.1 In the first construction, the recovered action of a basis element $[g]$ is the original action of $g$ by step 2.1, so the recovered $G$-action is unchanged. In the second construction, the recovered $R[G]$-action agrees with the original one on each basis element $[g]$, and it has the same scalar action because the compatibility condition fixes $(r[e]) \cdot m=rm$. Therefore the two constructions are inverse. [step 2.1, step 4.1, step 5.1, L1, discharge-construct] ∎
