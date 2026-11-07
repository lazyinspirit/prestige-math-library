---
id: lem-neron-tate-height-limit-exists
kind: lemma
title: Existence and well-definedness of the Néron–Tate height limit
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-abelian-variety-is-projective
  - thm-weil-height-machine-functoriality-and-additivity
  - lem-nonaffine-theorem-of-the-cube-for-abelian-variety
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§10.2, the quadratic-limit construction and its bounded-error input; pp. 93–99."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.4.4–8.4.5, canonical-height scaling and the Mordell–Weil descent."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K/\mathbb Q$ be a finite extension, let $A/K$ be a proper, smooth, geometrically connected group variety, and let $L$ be an invertible sheaf on $A$ with $[-1]^*L\cong L$. Let $h_L:A(K)\to\mathbb R$ represent the Weil-height class assigned to $L$, meaning its class modulo bounded functions is the value of $L$ under the height machine. For every $P\in A(K)$, the sequence $4^{-j}h_L([2]^jP)$ converges as $j\to\infty$; write $\ell_L(P)$ for its limit. This limit is independent of the chosen representative $h_L$, differs from $h_L$ by a bounded function on $A(K)$, and satisfies $\ell_L([2]P)=4\ell_L(P)$.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-number-field|number field]]

[[def-abelian-variety-over-a-field|abelian variety]]

[[thm-weil-height-machine-functoriality-and-additivity|Weil height class]]

## Facts & Assumptions

**Given:** AC and DC; a finite extension $K/\mathbb Q$; a proper, smooth, geometrically connected group variety $A/K$; an invertible sheaf $L$ with $[-1]^*L\cong L$; and a representative $h_L$ of its Weil-height class modulo bounded functions.

[A1] AC and DC are the stated axioms ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] An abelian variety is projective under AC ([[thm-abelian-variety-is-projective]]).

[F2] For an invertible sheaf $L$ on an abelian variety, the theorem of the cube gives
$$
m_{123}^*L\otimes m_1^*L\otimes m_2^*L\otimes m_3^*L\cong m_{12}^*L\otimes m_{13}^*L\otimes m_{23}^*L,
$$
where $m_I(x_1,x_2,x_3)=\sum_{i\in I}x_i$ ([[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]]).

[L1] The height machine constructs line-bundle height classes on projective schemes over a number field; pullback and tensor product are exact in the quotient of functions by bounded functions ([[thm-weil-height-machine-functoriality-and-additivity]]).

## Proof

**Proof technique:** derive $[2]^*L\cong L^{\otimes4}$ from the theorem of the cube, then prove convergence by summing a geometrically decaying error.

1.1 Pull back [F2] along $A\to A^3,\ P\mapsto(P,P,-P)$. The sum of the three coordinates is $P$, the pairwise sums are $2P,0,0$, and symmetry gives $[-1]^*L\cong L$. The two constant line bundles at $0$ are trivial as line bundles, so this pullback yields $[2]^*L\cong L^{\otimes4}$. [A1, F2, given, construct]

2.1 Since [F1] puts $A$ in the projective-scheme scope of [L1], the function $\delta(P)=h_L([2]P)-4h_L(P)$ is bounded on $A(K)$; choose $C\ge0$ with $|\delta(P)|\le C$ for all $P$. For fixed $P$, put $a_j=4^{-j}h_L([2]^jP)$. Then $|a_{j+1}-a_j|\le C4^{-(j+1)}$, and the geometric tail $\sum_{j\ge r}C4^{-(j+1)}=C4^{-r}/3$ tends to zero. Hence $(a_j)$ is Cauchy in $\mathbb R$, so it converges. [A1, F1, L1, step 1.1, given, algebra]

3.1 The same tail bound with $r=0$ gives $|\ell_L(P)-h_L(P)|\le C/3$ uniformly in $P$. If $h'_L=h_L+g$ is another representative with $|g|\le D$, then $4^{-j}|g([2]^jP)|\le4^{-j}D\to0$, so the two limits agree. [L1, step 2.1, algebra]

4.1 Finally, $\ell_L([2]P)=\lim_{j\to\infty}4^{-j}h_L([2]^{j+1}P) =4\lim_{j\to\infty}4^{-(j+1)}h_L([2]^{j+1}P) =4\ell_L(P).$ This proves the doubling identity. The use of AC and DC is inherited from [F1], [F2], and the current height-machine interface [L1]; this argument makes no additional choice. [A1, F1, F2, L1, step 2.1, algebra] ∎
