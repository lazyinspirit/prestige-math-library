---
page: cm-math-balances-examples
title: Cm Math Balances — Examples
status: draft
items: []
examples:
  - ex-cm-balances-impulse-and-rocket-checks
  - ex-cm-balances-continuation-boundary-checks
requires:
  - cm-math-balances
  - the-logarithm-and-general-powers
---

The companion page to [[cm-math-balances]] records explicit worked checks of
its balance and continuation results. Everything here is mathematics: the
examples carry `domain: mathematics`, depend only on the mathematical items of
the parent page and on mathematical suppliers, and make no physical or
empirical claim.

[[ex-cm-balances-impulse-and-rocket-checks]] solves finite momentum and
restitution equations directly, and checks the product-rule identities of
[[thm-cm-variable-mass-momentum-balance]]: an equal-mass half-elastic impulse
with $v_1^-=e$, $v_2^-=-e$, $e_r=\frac12$, giving $v_1^+=-\frac12e$,
$v_2^+=\frac12e$, $J=-\frac32e$ and $\Delta K=-\frac34$; an elastic unequal-mass
impulse with $m_1=1$, $m_2=3$, giving $v_1^+=-e$, $v_2^+=e$, $J=-3e$ and
$\Delta K=0$; and a rocket instance $m(t)=2-t$, $w_{\mathrm{out}}=v-e$, whose two
material balance identities hold and give $v(1)=\log 2\,e$, in contrast with the
naive closed-system reading $(mv)'=0$ which would force $v\equiv0$.

[[ex-cm-balances-continuation-boundary-checks]] contrasts the two signs of a
quadratic field. For $x'=x^2$, $x(0)=1$, the solution $x_+(t)=1/(1-t)$ breaks
down at $b=1$ although the field is finite at every point, no solution extends
past $1$, and the graph leaves every compact subset of the domain, witnessing
[[cor-cm-finite-time-breakdown-requires-escape]]. For $x'=-x^2$, $x(0)=1$, the
solution $x_-(t)=1/(1+t)$ is trapped in the compact set $[0,1]$, so the trapping
clause of [[thm-cm-compact-continuation-for-locally-lipschitz-odes]] rules out
any finite breakdown, consistent with the explicit global formula.
