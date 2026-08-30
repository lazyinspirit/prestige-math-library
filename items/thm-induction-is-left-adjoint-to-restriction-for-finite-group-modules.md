---
id: thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules
kind: theorem
title: "Induction is left adjoint to restriction for finite-group modules over a commutative ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-groups-and-induced-hom-maps, def-induced-r-linear-g-module-by-h-covariant-functions, thm-group-actions-and-group-ring-modules-correspond]
justified_by: []
aliases: []
proof_strategy: constructive
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 4.3.7"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 4.33"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

Let $R$ be a commutative ring, let $G$ be a finite group, let $H\le G$, let $W$
be an $R$-linear $H$-module, and let $V$ be an $R$-linear $G$-module. Then
there is a natural isomorphism

$$ \operatorname{Hom}_G(\operatorname{Ind}_H^G W,V) \cong \operatorname{Hom}_H(W,\operatorname{Res}_H^G V). $$

## Facts & Assumptions

**Given:** A commutative ring $R$, a finite group $G$, a subgroup $H\le G$, an
$R$-linear $H$-module $W$, and an $R$-linear $G$-module $V$.

[F1] The induced module consists of the functions $f:G\to W$ satisfying
$f(gh)=h^{-1}\cdot f(g)$, with $G$ acting by $(x\cdot f)(g)=f(x^{-1}g)$
([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] For modules, $\operatorname{Hom}$ is an abelian group under pointwise
addition, with maps induced by composition ([[def-hom-groups-and-induced-hom-maps]]).

[F3] $G$-equivariant maps are exactly the $R[G]$-module maps, and likewise for
$H$ ([[thm-group-actions-and-group-ring-modules-correspond]]).

## Proof

**Proof technique:** constructive.

1.1 For $w\in W$, define $\eta_w:G\to W$ by $\eta_w(h):=h^{-1}\cdot w$ for $h\in H$ and $\eta_w(g):=0$ for $g\notin H$. If $x\notin H$, then $xh\notin H$ for every $h\in H$, so $\eta_w(xh)=0=h^{-1}\cdot 0$; if $x\in H$, then $\eta_w(xh)=h^{-1}x^{-1}\cdot w=h^{-1}\cdot \eta_w(x)$. Thus $\eta_w\in\operatorname{Ind}_H^G W$. [F1, given, construct]
1.2 Choose a left transversal $T$ for $G/H$ with $e\in T$. If $\psi:W\to\operatorname{Res}_H^G V$ is $H$-equivariant, define $\beta(\psi)(f):=\sum_{t\in T} t\cdot\psi(f(t))$. The sum is finite because $T$ is finite. [F1, F2, given, choose, construct]
2.1 If $\Phi:\operatorname{Ind}_H^G W\to V$ is $G$-equivariant, define $\alpha(\Phi)(w):=\Phi(\eta_w)$. For $h\in H$, one has $\eta_{h\cdot w}=h\cdot\eta_w$ by the action formula in [F1], so $\alpha(\Phi)(h\cdot w)=\Phi(h\cdot\eta_w)=h\cdot\Phi(\eta_w)=h\cdot\alpha(\Phi)(w)$. Hence $\alpha(\Phi)\in\operatorname{Hom}_H(W,\operatorname{Res}_H^G V)$. [F1, F2, step 1.1, construct]
2.2 The map $\beta(\psi)$ is $G$-equivariant. Indeed, for $x\in G$ and each $t\in T$, write $x^{-1}t=t'h$ with $t'\in T$ and $h\in H$. Then $t\cdot\psi((x\cdot f)(t))=t\cdot\psi(f(x^{-1}t))=t\cdot\psi(f(t'h))=t\cdot\psi(h^{-1}\cdot f(t'))=t h^{-1}\cdot\psi(f(t'))=x t'\cdot\psi(f(t'))$, using the covariance from [F1] and the $H$-equivariance of $\psi$. Reindexing the finite sum by $t'$ shows $\beta(\psi)(x\cdot f)=x\cdot\beta(\psi)(f)$. [F1, F2, step 1.2, algebra]
3.1 For $\psi\in\operatorname{Hom}_H(W,\operatorname{Res}_H^G V)$, $\beta(\psi)(\eta_w)=\psi(w)$ because $\eta_w(t)=0$ for $t\ne e$ and $\eta_w(e)=w$. Hence $\alpha(\beta(\psi))=\psi$. [step 1.1, step 2.1, step 1.2, algebra]
3.2 For $\Phi\in\operatorname{Hom}_G(\operatorname{Ind}_H^G W,V)$ and $f\in\operatorname{Ind}_H^G W$, one has $\beta(\alpha(\Phi))(f)=\sum_{t\in T} t\cdot\alpha(\Phi)(f(t))=\sum_{t\in T} t\cdot\Phi(\eta_{f(t)})=\Phi(\sum_{t\in T} t\cdot\eta_{f(t)})$. The function inside $\Phi$ equals $f$, because at a point $th$ it takes the value $h^{-1}\cdot f(t)=f(th)$ by covariance. So $\beta(\alpha(\Phi))=\Phi$. [F1, step 2.1, step 1.2, algebra]
4.1 Steps 3.1 and 3.2 show that $\alpha$ and $\beta$ are inverse group isomorphisms, giving the stated adjunction. Via [F3], this is equally the usual $R[G]$-module adjunction. [F3, step 3.1, step 3.2, discharge-construct] ∎
