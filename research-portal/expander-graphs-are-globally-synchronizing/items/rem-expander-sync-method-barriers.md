---
id: rem-expander-sync-method-barriers
title: Numerical and structural limits of the regular-graph method
kind: remark
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-ramanujan
  - def-expander-sync-daido
  - def-expander-sync-global-synchrony
formulation_deps:
  - def-expander-sync-ramanujan
  - def-expander-sync-daido
  - def-expander-sync-global-synchrony
argument_deps:
  - def-expander-sync-ramanujan
dependency_roles:
  def-expander-sync-ramanujan: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 29, Section 5 opening; p. 30, Section 5 closing; p. 39, Section
        7 first paragraph
      statement: The authors describe a barrier at alpha = 0.24585 for their method,
        corresponding to Ramanujan degree at least 66; they give approximately
        0.943 for degree 3, report stopping at alpha = 0.0816 and degree 600,
        and express doubt about going beyond alpha = 0.1 or degree 400 by their
        computations. In Section 7 they identify the initial order-parameter
        bounds from Lemmas 2.1 and 2.3, which give no useful bounds unless d >=
        66, as a limit on the amplification approach without new ideas.
      hypotheses: The discussion concerns the authors' regular-graph synchronization
        method and the Ramanujan parameter 2 sqrt(d-1)/d; the stated limitations
        and expectations concern that method and its computations.
      reading_limits: The cited original PDF pages were inspected for attribution. The
        article is not used as proof of its own method-limit claims; the
        numerical amplification and underlying literature were not independently
        verified here.
dependency_level: 7
---

## Statement

For a finite $d$-regular Ramanujan graph in the article's convention, $d$ is a positive integer and its admissible adjacency-expansion parameter is $a(d)=2\sqrt{d-1}/d$ ([[def-expander-sync-ramanujan]]). A phase configuration assigns an angle modulo $2\pi$ to each vertex; its order parameters are $\rho_k=n^{-1}\sum_x e^{ik\theta_x}$ for integers $k\ge1$ ([[def-expander-sync-daido]]). Global synchronization is the property specified in [[def-expander-sync-global-synchrony]].

The article reports that its order-parameter and amplification method has a barrier at $\alpha\le0.24585$, because the authors lack an analogous order-parameter result beyond that range even with their regular-graph adaptations. They associate this threshold with Ramanujan degrees $d\ge66$ and say that reaching $d\ge3$ would require $\alpha\le0.943$, approximately. They report stopping their numerical improvements at $\alpha=0.0816$, associated with $d\ge600$, and consider it unlikely that those computations would reach beyond $\alpha\le0.1$, associated with $d\ge400$. In Section 7 the authors say that they extensively used Lemmas 2.1 and 2.3 to start their amplification argument, and that these lemmas give no useful bounds unless $d\ge66$, limiting what can be achieved without new ideas.

These are attributed descriptions of the authors' method and expectations, not assertions that global synchronization is impossible beyond those parameter ranges. The degree conversions for integer $d\ge3$ are verified below; this verification does not certify the numerical amplification or establish a universal barrier for other methods.

## Facts & Assumptions

**Given:** An integer $d\ge3$ and the parameter $a(d)=2\sqrt{d-1}/d$.

**Goal:** Verify the degree conversions stated above and the approximation at $d=3$.

[F1] The article's Ramanujan convention uses the parameter $a(d)=2\sqrt{d-1}/d$ for positive integer degree ([[def-expander-sync-ramanujan]]).

## Proof

1.1 For real $t>2$, extend the same formula by $a(t)=2\sqrt{t-1}/t>0$. If $2<s<t$, direct subtraction gives $a(s)^2-a(t)^2=4(t-s)(st-s-t)/(s^2t^2)>0$, because $st-s-t=(s-1)(t-1)-1>0$. Dividing this difference by $a(s)+a(t)>0$ gives $a(s)-a(t)>0$, so $a(t)$ is strictly decreasing on $t>2$. Direct rational comparisons give $4\cdot64/65^2>0.24585^2>4\cdot65/66^2$, $4\cdot598/599^2>0.0816^2>4\cdot599/600^2$, and $4\cdot397/398^2>0.1^2>4\cdot398/399^2$. Consequently, among integers $d\ge3$, the respective inequalities $a(d)\le0.24585$, $a(d)\le0.0816$, and $a(d)\le0.1$ first hold at $d=66$, $600$, and $399$. In particular, the article's association of $\alpha\le0.1$ with $d\ge400$ is sufficient, but $400$ is not the smallest admissible integer degree for this parameter inequality. [F1, given, algebra]

2.1 At $d=3$, $a(3)=2\sqrt2/3=0.942809\ldots$, which rounds to $0.943$ to three decimal places. This establishes the stated degree conversions and approximation; it makes no claim that the authors' method works at those endpoints. [F1, step 1.1, algebra] ∎

## Source notes

The statements about the authors' barrier, stopping point and expectations are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pages 29, 30 and 39. They are not used as premises for the calculation above.
