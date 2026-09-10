---
id: ex-kojman-shelah-scale-used-at-a-tail-supremum
kind: example
title: A scale used in the Dowker subspace
status: draft
origin: pipeline
deps: [def-axiom-of-choice, lem-scale-tail-suprema-have-prescribed-cofinality, def-kojman-shelah-scale-subspace, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 7 Lemma 1.2 and Exercise 11(c), printed pp. 39–41; zero-bound instance expanded here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Example

Assume AC and fix the normalized scale on its infinite coordinate set $B$. Starting above the concrete bound $b(n)=0$, the recursion below produces an actual point $h\in X$ with $\operatorname{cf}(h(n))=\omega_1$ at every coordinate. The same calculation works for any prescribed $b\in\prod_{n\in B}\aleph_n$ upon replacing the initial value $1$ by $b(n)+1$.

## Facts & Assumptions

**Given:** $\lambda=\aleph_{\omega+1}$ and the normalized scale $(f_\alpha)_{\alpha<\lambda}$; initially $b(n)=0$.

[F1] The scale is strictly eventually increasing and cofinal, and Rudin points eventually equal to its terms form $X$ ([[def-kojman-shelah-scale-subspace]]).

[F2] Strictly increasing $\omega_1$-long product representatives with increasing scale indices have a coordinate supremum in the product, of cofinality $\omega_1$ at each coordinate and eventually equal to a scale term ([[lem-scale-tail-suprema-have-prescribed-cofinality]], $m=k=1$).

[F3] Sets smaller than a cofinality are bounded in the ordinal ([[thm-cofinality-basics]]).

[F4] $\omega_1$, the factors $\aleph_n$ for $n\in B$, and $\lambda$ are regular under AC ([[thm-regularity-of-the-alephs]]).

[F5] Specified rules admit transfinite recursion ([[thm-transfinite-recursion]]).

[A1] AC is assumed for regularity and the normalized-scale construction ([[def-axiom-of-choice]]).

## Verification

1.1 Given the earlier $g_\eta$ for $\eta<\xi<\omega_1$, define $t_\xi(n)=\sup(\{1\}\cup\{g_\eta(n)+1:\eta<\xi\})$. By F3–F4 each countable supremum is below $\aleph_n$; thus $t_\xi$ is in the strict product. The earlier indices are countable and bounded below $\lambda$ by F3–F4. F1 supplies a scale term strictly eventually above $t_\xi$ with index above all earlier indices, by cofinality followed by a later scale term if necessary. Let $\alpha_\xi$ be the least eligible index and put $g_\xi(n)=\max(t_\xi(n),f_{\alpha_\xi}(n))$. This is in the product, is eventually equal to $f_{\alpha_\xi}$, and is above every earlier $g_\eta$ pointwise. F5 now supplies the sequence by the specified rule. At stage zero, $t_0(n)=1$ and $g_0(n)=\max(1,f_{\alpha_0}(n))\ge1>0$. At stage one, $t_1(n)=g_0(n)+1$ and $g_1(n)\ge g_0(n)+1$. These are the first two calculations of the instance. [F1, F3, F4, F5, A1]

2.1 Set $h(n)=\sup_{\xi<\omega_1}g_\xi(n)$ and $\delta=\sup_{\xi<\omega_1}\alpha_\xi$. The sequence in step 1.1 satisfies every hypothesis of F2, and $n>1$ for every $n\in B$, so its tail is the entire coordinate set. Therefore $h(n)<\aleph_n$, $\operatorname{cf}(h(n))=\omega_1$, $\delta<\lambda$, and $h=^*f_\delta$. The cofinalities have uniform strict bound $\aleph_2$, so $h$ is a Rudin point and F1 gives $h\in X$. The calculation $h(n)\ge g_1(n)>g_0(n)\ge1>0$ verifies strict domination of the chosen zero bound. [step 1.1, F1, F2]

3.1 For a prescribed $b$ replace $1$ in step 1.1 by $b(n)+1$. This value is below the limit cardinal $\aleph_n$, so the same countable-supremum and least-index arguments still apply. Then $g_0(n)\ge b(n)+1>b(n)$ and the resulting supremum satisfies $h(n)\ge g_0(n)>b(n)$ for every $n$. Thus the example exhibits the actual representative construction behind pointwise cofinality, with no choice of a member from a possibly empty scale class. QED. [step 1.1, step 2.1, F3, F4]
