---
id: lem-canonical-sequence-coding-for-well-orders
kind: lemma
title: "Canonical finite-sequence coding from a supplied well-order"
status: draft
origin: pipeline
deps: ["thm-cantor-normal-form", "thm-schroder-bernstein", "thm-transfinite-recursion"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (3), §6 corrected canonical pairing lemma"
      url: https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/
    - title: "Carneiro, §§3–3.1, pp.3–4"
      url: https://arxiv.org/pdf/1506.03533
---

## Statement

In ZF there is a uniform definable rule which, from any supplied well-order $<$ of an infinite set $Y$, produces a bijection $H:Y\to\operatorname{Seq}(Y)$. The construction selects no arbitrary bijection from $Y$ to its cardinal.

## Facts & Assumptions

[F1] [[thm-cantor-normal-form]]: Every nonzero ordinal has a unique finite Cantor normal form, choice freely.

[F2] [[thm-schroder-bernstein]]: Two supplied injections yield an explicit bijection without choice.

[F3] [[thm-transfinite-recursion]]: A formula specifying each set value recurses along any set ordinal.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix the natural pairing $p(m,n)=(m+n)(m+n+1)/2+n$, which is injective, has $p(0,0)=0$, and is positive otherwise. For $\delta=\omega^\beta$ with $\beta>0$, write $u,v<\delta$ in Cantor normal form over their common finite list of exponents, using zero coefficients where absent. Replace each coefficient pair $(a,b)$ by $p(a,b)$. The resulting ordinal $q_\delta(u,v)$ is below $\delta$, and its unique normal form recovers both inputs. Thus $q_\delta:\delta^2\to\delta$ is a uniformly defined injection. The empty exponent list represents zero. [F1]

2.1 For any infinite ordinal $\alpha$, its leading normal-form term gives $\delta=\omega^\beta$ and a positive finite $n$ with $\delta\le\alpha<\delta(n+1)$. Every $u<\alpha$ has a unique expression $u=\delta k+\rho$, $k\le n$, $\rho<\delta$, obtained from the finitely many consecutive blocks. Send it to $q_\delta(\rho,k)$. This injects $\alpha$ into $\delta$; inclusion injects $\delta$ into $\alpha$. The explicit Schroder–Bernstein construction gives a uniformly defined bijection $b_\alpha:\alpha\to\delta$. Conjugating $q_\delta$ by $b_\alpha$ gives an injection $q_\alpha:\alpha^2\to\alpha$. [F1, F2, step 1.1]

3.1 The supplied well-order has a unique order isomorphism $e:Y\to\alpha$. It can be constructed by assigning to each point the set of previously assigned ordinals; recursion supplies the assignment, and induction verifies it is an initial ordinal segment. Transfer $q_\alpha$ and the injection $\omega\subseteq\alpha$ to $Y$, obtaining $q:Y^2\to Y$ and $j:\omega\to Y$, with no arbitrary selection. [F3, step 2.1]

4.1 Define $c_0(\varnothing)=j(0)$ and $c_{n+1}(t)=q(c_n(t\restriction n),t(n))$. Finite induction proves each $c_n:{}^nY\to Y$ injective. Then $t\mapsto q(j(\operatorname{len}(t)),c_{\operatorname{len}(t)}(t))$ injects all finite sequences into $Y$, including length zero. The singleton map injects $Y$ in the other direction. Apply explicit Schroder–Bernstein and invert if necessary to obtain $H$. Every rule just described is definable from the supplied order. [F2, F3, step 3.1] ∎
