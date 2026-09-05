---
id: cex-local-global-fails-for-a-cubic-curve
kind: counterexample
title: "Selmer's cubic is locally soluble but globally insoluble"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-p-adic-simple-root-lifting, thm-p-adic-newton-criterion]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Keith Conrad, Selmer's Example"
      url: "https://dms.umontreal.ca/~mlalin/mat6630/selmerexample.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement refuted

The Hasse-Minkowski local-global principle for quadratic forms does not extend
to arbitrary cubic curves.

## Facts & Assumptions

**Given:** The simple-root $p$-adic lifting theorem ([[cor-p-adic-simple-root-lifting]]).

[L1] If $f\in\mathbb Z_p[X]$ has a simple root modulo $p$, then that root lifts uniquely to $\mathbb Z_p$ ([[cor-p-adic-simple-root-lifting]]).

[L2] If $f\in\mathbb Z_p[X]$ and $a_0\in\mathbb Z_p$ satisfy $|f(a_0)|_p<|f'(a_0)|_p^2$, Newton's criterion produces a $p$-adic root ([[thm-p-adic-newton-criterion]]).

## Counterexample

**Proof technique:** direct.

1.1 Consider Selmer's cubic $3X^3+4Y^3+5Z^3=0$. It has a real point because the one-variable equation $3x^3+5=0$ has a real root, giving $(x,0,1)$. It has a $2$-adic point because $f(X)=3X^3+9$ satisfies $f(1)\equiv0\pmod2$ and $f'(1)=9\not\equiv0\pmod2$, so [L1] lifts the mod-$2$ root and yields a point $(x,1,1)$ in $\mathbb Z_2^3$. It has a $3$-adic point because $80\equiv-1\pmod{27}$, so for $g(Y)=Y^3-80$ one has $|g(-1)|_3=3^{-4}<3^{-2}=|g'(-1)|_3^2$; [L2] therefore gives a $3$-adic root $y$ of $g$, and then $(0,y,-4)$ lies on the cubic. It has a $5$-adic point because $h(X)=3X^3+32$ satisfies $h(1)\equiv0\pmod5$ and $h'(1)=9\not\equiv0\pmod5$, so [L1] yields a $5$-adic root $x$, giving the point $(x,2,0)$. [L1, L2, given, algebra]

2.1 Conrad's cited note proves that Selmer's cubic has local points over every remaining $\mathbb Q_p$ but no nontrivial rational point over $\mathbb Q$. Thus the curve is locally soluble at every completion while globally insoluble, refuting any naive extension of Hasse-Minkowski from quadratic forms to cubic curves. [step 1.1, given, algebra] ∎
