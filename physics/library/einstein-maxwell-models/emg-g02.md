---
page: emg-g02
title: "Selected classical field topology and optional circle normalization"
status: published
items:
  - def-emg-topological-sector
  - pthm-emg-potentials-and-topological-limits
examples: []
---

This page separates a smooth classical real electromagnetic two-form from an optional circle-bundle connection with a chosen normalization $\kappa_0$. By [[def-emg-topological-sector]], a field is closed when $dF=0$ and has a global potential when $F=dA$ for a smooth one-form $A$ on $M$. A closed field has local potentials on star-shaped coordinate domains. A global potential forces $\int_c F=0$ for every finite smooth singular $2$-chain $c$ with $\partial c=0$, by [[thm-stokes-theorem-for-smooth-singular-chains]]; the punctured-space example below supplies such a cycle with nonzero flux. A fixed $U(1)$ sector restricts the explicit sphere-patch construction; that restriction is geometric model data and does not quantize every classical electromagnetic flux.

For the sphere example, fix $x^0$ and $r>0$ and write $S^2_r$ for the oriented spatial sphere. Let $N$ and $S$ denote its north and south poles, $U_N=S^2_r\setminus\{S\}$, $U_S=S^2_r\setminus\{N\}$, and $O=U_N\cap U_S$. The arrows below are subset inclusions; the composites from $O$ through either $U_N$ or $U_S$ to $S^2_r$ are the same inclusion. This cover diagram records the domains only. The local potential formulas, transition law, and proofs are given in the items and do not follow from the diagram.

```tikzcd
\begin{tikzcd}
& S^2_r & \\
U_N \arrow[ur,hook] & O \arrow[l,hook'] \arrow[r,hook] & U_S \arrow[ul,hook']
\end{tikzcd}
```

The companion [[emg-g02-examples]] gives exact flux and flat-holonomy calculations. The displayed mathematics concerns smooth fields on the stated domains; it reports no physical magnetic monopole and asserts no quantum charge or phase rule.
