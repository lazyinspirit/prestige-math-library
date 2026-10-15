---
id: lem-tdmath-reference-supremum-bounds
kind: lemma
title: Reference entropy supremum is finite and attained
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps: [def-complete-ordered-field, def-tdmath-tagged-scalable-compound, lem-tdmath-compound-mass-well-defined, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-spectator-cancellation, lem-tdmath-reference-order, lem-tdmath-reciprocal-naturals-tend-zero]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-tdmath-tagged-scalable-compound: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  lem-tdmath-spectator-cancellation: mathematical-premise
  lem-tdmath-reference-order: mathematical-premise
  lem-tdmath-reciprocal-naturals-tend-zero: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Lemmas 2.1 and 2.3"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Campión et al., A Survey on the Mathematical Foundations of Axiomatic Entropy, §§2–5"
      url: "https://www.mdpi.com/2075-1680/7/2/29/pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume [[def-tdmath-comparison-and-stability]] on compounds over a nonempty state set $X$, a strict reference pair $x_0\preceq x_1$ with not $x_1\preceq x_0$, and the complete ordered field $\mathbb R$. For $x\in X$ define

$$L_x:=\{\lambda\in\mathbb R:R_\lambda\preceq_s e_x\}.$$

Then $L_x$ is nonempty, bounded above, and downward closed. Its supremum $S(x):=\sup L_x$ is a real number and satisfies $R_{S(x)}\sim_s e_x$. Stability is used to prove attainment; no continuity of states or order is assumed.

## Facts & Assumptions

[A1] [[def-tdmath-comparison-and-stability]]: equal-mass compounds form a preorder with consistency, positive scaling, stability for fixed positive spectators, and CH.

[F1] [[def-tdmath-tagged-scalable-compound]] and [[lem-tdmath-compound-mass-well-defined]]: $e_x$ has mass one, compound masses are finite sums, and composition/scaling preserve the stated masses.

[F2] [[def-tdmath-signed-comparison]] and [[lem-tdmath-spectator-cancellation]]: signed comparisons are well-defined, translation-invariant, and agree with ordinary comparison on nonnegative compounds. For a finite-support signed map $u$, write $u^+(y):=\max\{u(y),0\}$ and $u^-(y):=\max\{-u(y),0\}$ pointwise; these are finite-support nonnegative maps with $u+u^-=u^+$, and this notation extends the positive and negative parts used in [[def-tdmath-signed-comparison]] to each signed reference map $R_\lambda$ itself.

[F3] [[lem-tdmath-reference-order]]: $R_\lambda\preceq_sR_\mu$ exactly when $\lambda\le\mu$.

[F4] [[lem-tdmath-reciprocal-naturals-tend-zero]]: for $n\in\mathbb N$, $\epsilon_n:=1/q_n$ with $q_n:=\iota_{\mathbb N}(\sigma(n))$ is positive, strictly decreasing, and converges to zero. Its canonical-natural convention gives $\iota_{\mathbb N}(n)\ge0$ and $q_n=\iota_{\mathbb N}(n)+1\ge1$; natural indices and their real images are distinguished.

[F5] [[def-complete-ordered-field]]: every nonempty bounded-above subset of $\mathbb R$ has a supremum.

## Proof

**Given:** [A1]–[F5], with $x\in X$ fixed.

1.1 Write $q_n:=\iota_{\mathbb N}(\sigma(n))>0$, so $\epsilon_n=1/q_n$ by [F4]. Suppose no $n\in\mathbb N$ satisfies $(q_n+1)e_{x_0}\preceq q_ne_{x_1}+e_x$. Both sides have mass $q_n+1$, so CH gives $q_ne_{x_1}+e_x\preceq(q_n+1)e_{x_0}$. Scale by $1/q_n=\epsilon_n$ to obtain $e_{x_1}+\epsilon_ne_x\preceq e_{x_0}+\epsilon_ne_{x_0}$. Apply stability to the sequence $\epsilon_n$, with bases $e_{x_1},e_{x_0}$ and positive unit-mass spectators $e_x,e_{x_0}$. It yields $x_1\preceq x_0$, contradicting strictness. Thus some $n$ has $(q_n+1)e_{x_0}\preceq q_ne_{x_1}+e_x$, which by signed translation and cancellation in [F2] is $R_{-q_n}\preceq_s e_x$; hence $-q_n\in L_x$. [A1, F1, F2, F4]

1.2 Suppose $L_x$ is unbounded above. For each $n\in\mathbb N$, unboundedness supplies $\lambda\in L_x$ with $\lambda>q_n$; [F3] gives $R_{q_n}\preceq_sR_\lambda$, and transitivity gives $q_n\in L_x$. Since $q_n\ge1$ by [F4], adding the common compound $q_ne_{x_0}$ to $R_{q_n}$ and $e_x$ makes them $e_{x_0}+q_ne_{x_1}$ and $e_x+q_ne_{x_0}$. Thus [F2] identifies $R_{q_n}\preceq_s e_x$ with the compound comparison between those maps. Scaling by $\epsilon_n=1/q_n$ gives $e_{x_1}+\epsilon_ne_{x_0}\preceq e_{x_0}+\epsilon_ne_x$. Stability with bases $e_{x_1},e_{x_0}$ and positive unit-mass spectators $e_{x_0},e_x$ now yields $x_1\preceq x_0$, again a contradiction. Therefore $L_x$ is bounded above. [A1, F1, F2, F3, F4]

2.1 If $\lambda\in L_x$ and $\mu\le\lambda$, [F3] gives $R_\mu\preceq_sR_\lambda$; signed transitivity and $R_\lambda\preceq_s e_x$ imply $\mu\in L_x$. Thus $L_x$ is downward closed. By steps 1.1 and 1.2 it is nonempty and bounded above, so [F5] supplies the real number $s:=\sup L_x$. [A1, F2, F3, F5, step 1.1, step 1.2]

3.1 For each $n\in\mathbb N$, $s-\epsilon_n$ is not an upper bound of $L_x$, so some $\lambda\in L_x$ has $\lambda>s-\epsilon_n$. Downward closure gives $s-\epsilon_n\in L_x$. Consistency then gives $R_s+\epsilon_ne_{x_0}\preceq_s e_x+\epsilon_ne_{x_1}$, because $R_{s-\epsilon_n}+\epsilon_ne_{x_1}=R_s+\epsilon_ne_{x_0}$. Let $K:=R_s^-$. Adding the fixed nonnegative map $K$ to both sides converts this signed comparison into the compound comparison $R_s^++\epsilon_ne_{x_0}\preceq e_x+K+\epsilon_ne_{x_1}$. Their bases have equal mass because $m(R_s^+)-m(K)=1=m(e_x)$. Stability with positive unit-mass spectators $e_{x_0},e_{x_1}$ yields $R_s^+\preceq e_x+K$, that is, $R_s\preceq_s e_x$. [A1, F1, F2, F4, step 2.1]

4.1 Since $s$ is an upper bound, $s+\epsilon_n\notin L_x$ for every $n\in\mathbb N$. To derive the reverse signed comparison from CH, set $H_n:=R_{s+\epsilon_n}^-$. The translated maps $e_x+H_n$ and $R_{s+\epsilon_n}+H_n=R_{s+\epsilon_n}^+$ are nonnegative compounds. Since $R_{s+\epsilon_n}=R_{s+\epsilon_n}^+-H_n$ has total coefficient one, finite-sum linearity gives $m(R_{s+\epsilon_n}^+)-m(H_n)=1$; with $m(e_x)=1$, the translated compounds have equal mass $1+m(H_n)$. CH applies to this pair. If it gave $R_{s+\epsilon_n}^+\preceq e_x+H_n$, signed translation invariance in [F2] would imply $R_{s+\epsilon_n}\preceq_s e_x$, contrary to $s+\epsilon_n\notin L_x$. Therefore it gives $e_x+H_n\preceq R_{s+\epsilon_n}^+$, which by [F2] is $e_x\preceq_s R_{s+\epsilon_n}$. Add $\epsilon_ne_{x_0}$ to both signed maps and use $R_{s+\epsilon_n}+\epsilon_ne_{x_0}=R_s+\epsilon_ne_{x_1}$. Then add $K=R_s^-$ to both; the resulting equal-mass compound comparison is $e_x+K+\epsilon_ne_{x_0}\preceq R_s^++\epsilon_ne_{x_1}$. Stability with bases $e_x+K,R_s^+$ and positive unit-mass spectators $e_{x_0},e_{x_1}$ gives $e_x+K\preceq R_s^+$, or $e_x\preceq_sR_s$. Together with step 3.1 this proves $R_s\sim_s e_x$ and the claimed attainment. [A1, F1, F2, F4, step 2.1, step 3.1] ∎

