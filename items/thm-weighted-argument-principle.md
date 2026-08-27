---
id: thm-weighted-argument-principle
kind: theorem
title: "The weighted argument principle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-argument-principle-null-homologous-cycle,
       thm-residue-theorem-null-homologous-cycle,
       lem-logarithmic-derivative-order-residue,
       thm-algebra-of-complex-derivatives]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$, let
$\Gamma$ be admissible for the residue theorem in $\Omega$, suppose
$f(z)\ne0$ for every $z\in\Gamma^\ast$, and let $g$ be holomorphic on
$\Omega$. Then

$$\frac{1}{2\pi i}\int_\Gamma g(z)\frac{f'(z)}{f(z)}\,dz=\sum_{a\in Z(f)} n(\Gamma,a)\operatorname{ord}_a(f)\,g(a)-\sum_{b\in P(f)} n(\Gamma,b)\operatorname{ord}^{\mathrm{pole}}_b(f)\,g(b),$$

and only finitely many terms are nonzero.

## Facts & Assumptions

**Given:** An open set $\Omega$, a meromorphic function $f$ on $\Omega$, an
admissible cycle $\Gamma$ with $f\ne0$ on $\Gamma^\ast$, and a holomorphic
function $g$ on $\Omega$.

[L1] The logarithmic derivative has residue $m$ at a zero of order $m$ and
residue $-m$ at a pole of order $m$
([[lem-logarithmic-derivative-order-residue]]).

[L2] The unweighted argument principle already shows that only finitely many
zeros and poles of $f$ have nonzero index with respect to $\Gamma$
([[thm-argument-principle-null-homologous-cycle]]).

[L3] The residue theorem sums the indexed residues of an admissible meromorphic
function over $\Gamma$ ([[thm-residue-theorem-null-homologous-cycle]]).

## Proof

**Proof technique:** direct.

1.1 Put $h(z):=g(z)f'(z)/f(z)$. Away from the zeros and poles of $f$, the function $f'/f$ is holomorphic, so $h$ is holomorphic there as well. At a zero or pole $c$ of $f$, the function $g$ is holomorphic and therefore admits the expansion $g(z)=g(c)+(z-c)u(z)$ near $c$ for some holomorphic $u$. Multiplying that by the principal-part decomposition from [L1] shows $$\operatorname{Res}(h,c)=g(c)\operatorname{Res}\!\left(\frac{f'}{f},c\right).$$ [given, L1, algebra]

2.1 Step 1.1 and [L1] therefore give $$\operatorname{Res}(h,a)=g(a)\operatorname{ord}_a(f)$$ at each zero $a$ of $f$, and $$\operatorname{Res}(h,b)=-g(b)\operatorname{ord}^{\mathrm{pole}}_b(f)$$ at each pole $b$ of $f$. By [L2], only finitely many such points have nonzero index with respect to $\Gamma$. [step 1.1, L1, L2]

3.1 Applying [L3] to $h$ and substituting the residue values from step 2.1 gives the displayed weighted sum formula. [step 2.1, L3] ∎
