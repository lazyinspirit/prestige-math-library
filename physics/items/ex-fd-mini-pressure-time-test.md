---
id: ex-fd-mini-pressure-time-test
kind: example
title: "A mean-zero square pressure time test"
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-mini-fluid-interface
  - prop-fd-mini-accumulated-pressure-observation
  - def-countable-choice
dependency_roles:
  def-fd-mini-fluid-interface: mathematical-premise
  prop-fd-mini-accumulated-pressure-observation: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 54: Stokes equations: Stable pairs (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf
      locator: "§54.2, Lemma 54.5 and Remark 54.6, printed pp. 410–413: MINI finite-element context; this example is a direct specialization of the local pressure-observation proposition."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§§8.4.2 and 8.6.1, printed pp. 470–471 and 487–488: MINI finite-element context; this example uses the local accumulated-pressure estimate."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Assume Countable Choice. Take $D=(0,1)^2$, $T=1$, and a smooth MINI observation interface with three time cells $0=t_0<t_1<t_2<t_3=1$ satisfying the accumulated-pressure proposition's strong-solution and time-step hypotheses. Use the mean-zero pressure sensor $\xi(x,y)=x-\tfrac12$. Choose any nonconstant $\widehat\eta\in C_c^\infty((\tfrac14,\tfrac34))$ and set $\eta=\widehat\eta/\|\widehat\eta'\|_{L^1(0,1)}$. Then $\|\xi\|_{L^2(D)}=1/\sqrt{12}$ and $\|\eta'\|_{L^1(0,1)}=1$. For every node $m\in\{0,1,2,3\}$, the accumulated pressure observation error is at most $KH/\sqrt{12}$ and the time-tested pressure observation error is at most $(K+1)H/\sqrt{12}$, where $K$ and $H$ are exactly those in the accumulated-pressure proposition.

The diagram records only the definitions: the horizontal cells carry the right-constant pressure reconstruction, and each arrow adds the corresponding pressure increment to the Q-valued primitive. Horizontal spacing is schematic and does not encode the time-step sizes; node heights are layout only and do not encode pressure magnitudes or data.

\begin{tikzpicture}[>=stealth]
\node (p0) at (0,1.25) {$P_h^0=0$};
\node (p1) at (2,1.25) {$P_h^1$};
\node (p2) at (4,1.25) {$P_h^2$};
\node (p3) at (6,1.25) {$P_h^3$};
\draw[->] (p0) -- node[above] {$+\tau_1p_h^1$} (p1);
\draw[->] (p1) -- node[above] {$+\tau_2p_h^2$} (p2);
\draw[->] (p2) -- node[above] {$+\tau_3p_h^3$} (p3);
\draw[->] (0,0) -- (6.4,0) node[right] {$t$};
\foreach \x/\lab in {0/$t_0$,2/$t_1$,4/$t_2$,6/$t_3$}
  \draw (\x,0.08) -- (\x,-0.08) node[below] {\lab};
\node at (1,0.38) {$\bar p_h=p_h^1$};
\node at (3,0.38) {$\bar p_h=p_h^2$};
\node at (5,0.38) {$\bar p_h=p_h^3$};
\end{tikzpicture}

## Example references

[[def-fd-mini-fluid-interface|smooth MINI observation interface]]

[[prop-fd-mini-accumulated-pressure-observation|accumulated-pressure observation bound]]

[Guermond, Chapter 54, §54.2](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf)

[Boffi, Brezzi, and Fortin, §§8.4.2 and 8.6.1](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a smooth MINI interface on the unit square with three time cells, a nonconstant $\widehat\eta\in C_c^\infty((\tfrac14,\tfrac34))$, and the sensor and normalized time test in the Example.

[A1] Countable Choice means that every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function $f$ with $f(n)\in X_n$. ([[def-countable-choice]])

[F1] The accumulated-pressure proposition bounds the endpoint observation by $KH\|\xi\|_Q$ and the time-tested observation by $(K+1)H\|\eta'\|_{L^1}\|\xi\|_Q$ under the stated smooth-branch hypotheses. ([[prop-fd-mini-accumulated-pressure-observation]])

[F2] The interface defines the accumulated-pressure observation $(P(t_m)-P_h^m,\xi)_{L^2}$ and the time-tested pressure observation $\left(\int_0^T(p(t)-\bar p_h(t))\eta(t)\,dt,\xi\right)_{L^2}$. ([[def-fd-mini-fluid-interface]])

[L1] Direct integration on the unit square gives $\int_D(x-\tfrac12)\,dx\,dy=0$ and $\int_D(x-\tfrac12)^2\,dx\,dy=1/12$.

[L2] If the smooth compactly supported function $\widehat\eta$ were to have $\|\widehat\eta'\|_{L^1}=0$, then continuity of its derivative would force $\widehat\eta'=0$ everywhere, making $\widehat\eta$ constant; this contradicts the given nonconstancy.

## Verification

**Given:** The interface and tests in the Example.

1.1 By [L1], $\xi\in Q$ and $\|\xi\|_Q=1/\sqrt{12}$. [given, L1, algebra]

1.2 By [L2], $\|\widehat\eta'\|_{L^1(0,1)}>0$, so $\eta$ is defined and has $\|\eta'\|_{L^1(0,1)}=1$. [given, L2, algebra]

2.1 Apply [F1] using the interface observations in [F2] with this $\xi$ and $\eta$. Substituting the two norms from steps 1.1 and 1.2 gives the endpoint bound $KH/\sqrt{12}$ at every $0\le m\le3$ and the time-tested bound $(K+1)H/\sqrt{12}$. These are conditional mathematical error bounds, not measured values. [A1, F1, F2, step 1.1, step 1.2, algebra] ∎
