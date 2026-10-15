---
id: lem-tdmath-integrable-tail-diagonal-gap
kind: lemma
title: Diagonal gap for a decreasing integrable interaction tail
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-tdmath-superstable-regular-interaction]
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 4, printed pp.181–184 / PDF pp.11–14, regularity envelopes and separated-box boundary estimates."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–2, printed pp.132–139 / PDF pp.5–12, summable lattice envelopes and gap estimates."
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

Let $d\geq1$ and let $\phi$ be a regular potential with a nonnegative nonincreasing envelope $\psi:[R_0,\infty)\to[0,\infty)$, where $R_0<\infty$ and $\int_{R_0}^\infty r^{d-1}\psi(r)dr<\infty$. Thus $|\phi(x)|\leq\psi(|x|_\infty)$ for $|x|_\infty\geq R_0$. For $g>2R_0$ set
$$\eta(g)=g^d\psi(g)+\int_g^\infty r^{d-1}\psi(r)dr.$$
Then $\eta(g)\to0$ and
$$\sum_{m=1}^\infty m^{d-1}\psi(mg)\leq 2^{d-1}g^{-d}\eta(g).$$
Moreover, there is a choice $g(\ell)>0$, for all sufficiently large real $\ell$, such that $g(\ell)\to\infty$, $g(\ell)/\ell\to0$, and
$$\left(\frac{\ell}{g(\ell)}\right)^d\eta(g(\ell))\longrightarrow0.$$
For every fixed finite configuration and all sufficiently large periods $L$, the noncoincident periodic-image tail $\sum_{k\in\mathbb Z^d,\ |k|_\infty\geq K_0}|\phi(x-y+Lk)|$ is absolutely convergent. The tail of the cell envelope $\psi(|j|_\infty-1)$ over all sufficiently large integer offsets is summable. This lemma is a deterministic tail estimate; it uses no superstability or thermodynamic-limit conclusion.

## Facts & Assumptions

**Given:** $d,R_0,\psi$ as in the Statement.

[F1] The lower regularity convention in [[def-tdmath-superstable-regular-interaction]] supplies a nonnegative nonincreasing tail envelope with finite weighted integral.

## Proof

**Given:** The hypotheses and notation above.

1.1 Since $\psi$ is nonincreasing, $0\leq g^d\psi(g)\leq \frac{d}{1-2^{-d}}\int_{g/2}^{g}r^{d-1}\psi(r)dr$ for $g>2R_0$: on $[g/2,g]$, $\psi(r)\geq\psi(g)$, and integration of $r^{d-1}$ gives the displayed coefficient. Both the interval integral and the tail integral in $\eta(g)$ tend to zero as $g\to\infty$, so $\eta(g)\to0$. [F1, algebra]

1.2 For $m\geq2$ and $r\in[(m-1)g,mg]$, monotonicity gives $\psi(r)\geq\psi(mg)$ and $r^{d-1}\geq((m-1)g)^{d-1}$. Hence $$ \int_{(m-1)g}^{mg}r^{d-1}\psi(r)dr\geq g^d(m-1)^{d-1}\psi(mg). $$ Since $m^{d-1}\leq2^{d-1}(m-1)^{d-1}$, summing over disjoint intervals yields $\sum_{m\geq2}m^{d-1}\psi(mg)\leq2^{d-1}g^{-d}\int_g^\infty r^{d-1}\psi(r)dr$. The $m=1$ term equals $g^{-d}g^d\psi(g)$, so adding it proves the stated bound because $2^{d-1}\geq1$. [F1, algebra]

1.3 For integer $m\geq\lceil R_0+3\rceil$, monotonicity gives $\psi(r)\geq\psi(m-1)$ on $[m-2,m-1]$, so $\int_{m-2}^{m-1}r^{d-1}\psi(r)dr\geq(m-2)^{d-1}\psi(m-1)$. Since $m^{d-1}\leq c_d(m-2)^{d-1}$ for these $m$, summing over disjoint unit intervals proves $\sum_{m\geq\lceil R_0+3\rceil} m^{d-1}\psi(m-1)<\infty$. [F1, algebra]

2.1 For each integer $k\geq1$, let $G_k$ be the least integer greater than $2R_0$ such that $\eta(g)\leq k^{-2d}$ for every $g\geq G_k$; it exists by step 1.1 and the well-ordering of the positive integers. Choose a strictly increasing sequence $L_k$ with $L_k\geq kG_k$ and $L_k\geq k^2$. For $\ell\geq L_1$, let $k(\ell)=\max\{k:L_k\leq\ell\}$ and $g(\ell)=\ell/k(\ell)$. Then $k(\ell)\to\infty$, $g(\ell)\geq G_{k(\ell)}$ and $g(\ell)\geq k(\ell)$, while $g(\ell)/\ell=1/k(\ell)$. Therefore $$ \left(\frac{\ell}{g(\ell)}\right)^d\eta(g(\ell))\leq k(\ell)^d k(\ell)^{-2d}=k(\ell)^{-d}\to0. $$ This gives all three gap limits. [F1, step 1.1, choose]

3.1 Fix distinct points $x,y$ in a finite configuration and a period $L>0$. For $|k|_\infty$ larger than $2|x-y|_\infty/L+2R_0/L$, the triangle inequality gives $|x-y+Lk|_\infty\geq L|k|_\infty/2>2R_0$. Grouping lattice indices by $m=|k|_\infty$ and applying the sum bound of step 1.2 with gap $g=L/2$ shows $\sum_k|\phi(x-y+Lk)|<\infty$ whenever $L/2>2R_0$. There are finitely many remaining images; any $+\infty$ term makes the periodic energy $+\infty$ by definition, while otherwise their finite sum is well-defined. This proves the periodic-image convention used in [[def-tdmath-superstable-regular-interaction]] for all sufficiently large $L$. [F1, step 1.2, algebra] ∎
