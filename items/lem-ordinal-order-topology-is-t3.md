---
id: lem-ordinal-order-topology-is-t3
kind: lemma
title: "Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-order-topology-on-an-ordinal, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-neighbourhood-top,
       def-interior-closure-boundary-top, lem-ordinal-basics, lem-ordinal-trichotomy,
       def-ordinal, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "ordinal spaces are $T_3$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "J. Munkres, Topology, 2nd ed., §14"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf"
pipeline_run: null
---

## Statement

Let $\gamma$ be an ordinal ([[def-ordinal]]) with its order topology
([[def-order-topology-on-an-ordinal]]), whose basis is
$\mathcal{B}_\gamma$. Then:

1. Every member of $\mathcal{B}_\gamma$ is **clopen** in $\gamma$
   ([[def-topological-space]]), so $\gamma$ has a basis of clopen sets.
2. $\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).
3. $\gamma$ is Hausdorff ([[def-hausdorff-space]]).
4. $\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.

## Facts & Assumptions

**Given:** An ordinal $\gamma$ with its order topology, ordinals $\alpha, \beta, \xi, \eta \in \gamma$, and the basis $\mathcal{B}_\gamma$ consisting of the sets $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$.

[A1] $[0,\beta] = \{\, \zeta \in \gamma : \zeta \le \beta \,\}$ and $(\alpha,\beta] = \{\, \zeta \in \gamma : \alpha < \zeta \le \beta \,\}$, and $\mathcal{B}_\gamma$ is a basis for the order topology ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).

[L1] For ordinals exactly one of $\zeta < \eta$, $\zeta = \eta$, $\eta < \zeta$ holds, and $<$ is transitive; every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L2] A set is open exactly when each of its points lies in a basic set inside it; a set is closed exactly when its complement is open; a union of open sets is open ([[def-topology-basis-subbasis]], [[def-topological-space]]).

[L3] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b), [[def-t0-and-t1-spaces]]).

[L4] The basic sets containing a point form a neighbourhood base at that point, consisting of open sets ([[def-neighbourhood-top]]).

[L5] A space is regular exactly when every point has a neighbourhood base of closed neighbourhoods ([[lem-regularity-via-closed-neighbourhoods]], clause (c), [[def-regular-and-t3-spaces]]).

[L6] A closed neighbourhood of a point is a neighbourhood of it that is closed, and $\overline{K} = K$ for such a $K$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 The set $T_\beta := \{\, \zeta \in \gamma : \beta < \zeta \,\}$ is open for every $\beta \in \gamma$: if $\beta < \zeta$ with $\zeta \in \gamma$ then $(\beta,\zeta]$ is a basic set with $\zeta \in (\beta,\zeta] \subseteq T_\beta$, by [A1] and transitivity in [L1]. [A1, L1, L2]

1.2 The set $S_\xi := \{\, \zeta \in \gamma : \zeta < \xi \,\}$ is open for every $\xi \in \gamma$: if $\zeta < \xi$ then $[0,\zeta]$ is a basic set with $\zeta \in [0,\zeta] \subseteq S_\xi$, again by [A1] and transitivity. [A1, L1, L2]

1.3 Let $\xi \ne \eta$ in $\gamma$ and assume $\xi < \eta$ without loss of generality, by [L1]. Then $[0,\xi]$ and $(\xi,\eta]$ are basic open sets with $\xi \in [0,\xi]$, $\eta \in (\xi,\eta]$ and $[0,\xi] \cap (\xi,\eta] = \varnothing$ by [A1] and trichotomy; so $\gamma$ is Hausdorff, which is claim 3. [A1, L1]

2.1 $\gamma \setminus [0,\beta] = T_\beta$ by trichotomy, so $[0,\beta]$ is closed by step 1.1 and [L2]; and $[0,\beta]$ is open, being basic. [step 1.1, A1, L1, L2]

2.2 $\gamma \setminus (\alpha,\beta] = S_{\alpha^{+}} \cup T_\beta$ by trichotomy, where $S_{\alpha^{+}} = [0,\alpha]$ is basic open and $T_\beta$ is open by step 1.1, so $(\alpha,\beta]$ is closed by [L2]; and it is open, being basic. [step 1.1, A1, L1, L2]

2.3 $\gamma \setminus \{\xi\} = S_\xi \cup T_\xi$ by trichotomy, which is open by steps 1.1 and 1.2 and [L2], so $\{\xi\}$ is closed. [step 1.1, step 1.2, L1, L2]

3.1 Steps 2.1 and 2.2 exhaust $\mathcal{B}_\gamma$, so every basic set is clopen, which is claim 1. [step 2.1, step 2.2, A1]

3.2 Step 2.3 makes every singleton closed, so $\gamma$ is $T_1$ by [L3], which is claim 2. [step 2.3, L3]

4.1 Let $\xi \in \gamma$ and let $N$ be a neighbourhood of $\xi$; by [L4] there is a basic $B \in \mathcal{B}_\gamma$ with $\xi \in B \subseteq N$, and $B$ is closed by step 3.1 and open, hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4, L6]

5.1 By step 4.1 every point of $\gamma$ has a neighbourhood base of closed neighbourhoods, so $\gamma$ is regular by [L5]; with step 3.2 it is $T_3$, which is claim 4. [step 3.2, step 4.1, L5] ∎

## Remarks

- **The clopen basis is the whole content.** A space with a basis of clopen sets is regular for the reason given in step 4.1, and the ordinals have such a basis because a half-open interval $(\alpha,\beta]$ has an *immediate* left endpoint outside it, namely $\alpha$, and everything above $\beta$ is separated from it by a further half-open interval. No case distinction between successors and limits is needed anywhere in the proof.

- **Regularity is claimed and normality is not.** Nothing above asserts that an ordinal with its order topology is normal, and nothing on this page proves it. The companion page's deleted plank is a subspace of a product of two ordinal spaces and is *not* normal, so no normality statement about ordinal spaces may be read off from this lemma in either direction.

- **No choice principle is used**, every ingredient being a theorem of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).
