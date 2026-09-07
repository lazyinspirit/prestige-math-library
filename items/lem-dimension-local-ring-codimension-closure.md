---
id: "lem-dimension-local-ring-codimension-closure"
kind: "lemma"
title: "Closed-point local dimension equals ambient irreducible dimension"
deps: ["thm-dimension-equals-transcendence-degree", "def-codimension-irreducible-subvariety", "thm-local-ring-affine-variety-localization", "cor-height-plus-quotient-dimension-affine-domain", "def-height-of-a-prime-ideal"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §3l, chain-height interpretation"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Choose an affine chart at x; quotient by its maximal ideal is k and has dimension zero. Apply the height formula and the local-ring identification. Inherit Choice where used by suppliers."
---

## Statement

If $X$ is an irreducible classical variety and $x$ is a closed point, then $\dim\mathcal O_{X,x}=\dim X=\operatorname{codim}_X\{x\}$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-equals-transcendence-degree]]).

[F2] For a nonempty irreducible closed subvariety $Z$ of an irreducible classical variety $X$, define $\operatorname{codim}_X Z=\dim X-\dim Z$. These are finite integers. In a reducible ambient variety a difference of global dimensions must not be substituted for the height of a local prime; the containing component matters. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-codimension-irreducible-subvariety]]).

[F3] Assume the Axiom of Choice. Let $X$ be a classical affine variety over an algebraically closed field $k$, let $x \in X$, and let $$ \mathfrak m_x:=\{\overline f \in k[X]:\overline f(x)=0\}. $$ Then there is a canonical isomorphism of local rings $$ \mathcal O_{X,x}\xrightarrow{\sim}k[X]_{\mathfrak m_x}. $$ ([[thm-local-ring-affine-variety-localization]]).

[F4] Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\in\operatorname{Spec}(A)$. Then $$ \operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=\dim A. $$ ([[cor-height-plus-quotient-dimension-affine-domain]]).

[F5] Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. The **height** of $\mathfrak p$ is the Krull dimension of the local ring $R_{\mathfrak p}$: $$ \operatorname{ht}(\mathfrak p)=\dim(R_{\mathfrak p}). $$ ([[def-height-of-a-prime-ideal]]).

## Proof

1.1 Choose an affine neighborhood $U$ of $x$ with coordinate domain $A$ and evaluation maximal ideal $\mathfrak m_x$. The local-ring supplier identifies $\mathcal O_{X,x}$ with $A_{\mathfrak m_x}$; germs are unchanged on restricting a neighborhood. Its dimension is $\operatorname{ht}\mathfrak m_x$ by definition. [F3, F5]

2.1 Evaluation gives $A/\mathfrak m_x=k$, of dimension zero. The height formula yields $\operatorname{ht}\mathfrak m_x=\dim A$. The transcendence-degree formula computes $\dim U=\dim X$ from the common chart field, while $\dim\{x\}=0$. Thus the local-ring dimension and the codimension difference are both $\dim X$. [F1, F2, F4, step 1.1] ∎
