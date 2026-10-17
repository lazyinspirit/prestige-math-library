---
id: lem-csm-peierls-energy-injection
kind: lemma
title: "Peierls contour probability bound"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps: ["lem-csm-ising-parity-contours", "lem-csm-finite-gibbs-variational-identity"]
justified_by: []
dependency_roles: {"lem-csm-ising-parity-contours": "mathematical-premise", "lem-csm-finite-gibbs-variational-identity": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Chapter 6 §6.12, PDF pp. 329–332 (printed pp. 311–314)."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Let $n\in\mathbb Z_{\geq0}$ and $B_n=[-n,n]^2\cap\mathbb Z^2$. For $s\in\{-1,+1\}^{B_n}$, set $\widehat s_i=s_i$ for $i\in B_n$ and $\widehat s_i=+1$ for $i\notin B_n$, and define
$$H_{B_n}^+(s)=-J\sum_{\substack{\{i,j\}\subset\mathbb Z^2:\ |i-j|_1=1,\ \{i,j\}\cap B_n\ne\varnothing}}\widehat s_i\widehat s_j,\qquad Z_{B_n}^+=\sum_{s\in\{-1,+1\}^{B_n}}e^{-\beta H_{B_n}^+(s)},\qquad \gamma_{B_n}^+(s)=(Z_{B_n}^+)^{-1}e^{-\beta H_{B_n}^+(s)}.$$
The energy sum is finite because $B_n$ is finite and interactions are nearest-neighbor. For the nearest-neighbor Ising model with coupling $J>0$, zero field and $\beta>0$, any simple dual cycle $\gamma$ that occurs in the disagreement graph of a configuration determines the event $A_\gamma$ that all primal bonds crossed by $\gamma$ have disagreeing spins. Then
$$\gamma_{B_n}^+(A_\gamma)\leq e^{-2\beta J|\gamma|}.$$
For each such cycle, the parity-inside is defined by [[lem-csm-ising-parity-contours]] and lies in the variable box.

## Facts & Assumptions

**Given:** A finite plus-boundary square-lattice Ising system with $J>0$, $h=0$, $\beta>0$, and a disagreement cycle $\gamma$.

[F1] For $n\geq1$, in a disagreement graph of a plus-boundary configuration, ray parity defines a finite inside whose boundary bonds are exactly the cycle edges ([[lem-csm-ising-parity-contours]]).

[F2] A finite Gibbs probability assigns weights proportional to $e^{-\beta H}$ with a finite positive normalizer ([[lem-csm-finite-gibbs-variational-identity]]).

## Proof

1.1 For $n\geq1$, let $C_\gamma$ be the parity-inside primal sites from [F1]; that lemma gives $C_\gamma\subseteq B_n$ and identifies its boundary bonds with the edges crossed by $\gamma$. For $n=0$, $B_0=\{0\}$: the plus spin has no disagreement edges, and the minus spin has exactly the four dual edges forming the unit square centered at $0$. This is the only possible simple disagreement cycle; its ray-parity inside is $\{0\}$ and its crossed bonds are exactly the four bonds incident to $0$. Thus the same containment and boundary identification hold also for $n=0$. The map that flips every spin in $C_\gamma$ and leaves all other spins fixed is an involution on the finite configuration set, preserves the fixed plus exterior, and is injective. [given, F1, construct]

2.1 Every bond crossing $\gamma$ has opposite spins on $A_\gamma$ and becomes aligned after the flip; its contribution to $H_{B_n}^+$ changes from $+J$ to $-J$, a decrease of $2J$. Every other bond has both endpoints inside or both outside $C_\gamma$, so its spin product is unchanged. Therefore $H_{B_n}^+(\sigma)=H_{B_n}^+(\mathrm{flip}_{C_\gamma}\sigma)+2J|\gamma|$ on $A_\gamma$. [step 1.1, algebra]

3.1 By [F2], summing $e^{-\beta H(\sigma)}$ over $A_\gamma$ equals $e^{-2\beta J|\gamma|}$ times the weight sum over the image of the injective flip map. That image is a subset of all box configurations, so its total weight is at most the full partition function. Dividing by that positive partition function proves the bound. [F2, step 2.1, algebra] ∎ 
