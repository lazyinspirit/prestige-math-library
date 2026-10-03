---
id: "lem-torus-rational-modules-and-gradings"
kind: "lemma"
title: "Torus rational modules and affine actions are lattice gradings"
status: "draft"
origin: "pipeline"
deps: ["def-rational-action-on-affine-variety", "prop-affine-algebraic-actions-coordinate-ring-coaction", "def-classical-affine-coordinate-ring", "thm-classical-affine-nullstellensatz-correspondence", "def-axiom-of-choice"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
proof_strategy: direct
verification: {"precheck": "pass", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-03}}
---

## Statement

Let $T=(\mathbb C^*)^r$, $r\ge0$, with $H=\mathbb C[t_1^{\pm1},\ldots,t_r^{\pm1}]$ and $t^m=\prod_i t_i^{m_i}$ for $m\in\mathbb Z^r$. Right $H$-comodules (equivalently rational $T$-modules) correspond to direct-sum gradings $V=\bigoplus_m V_m$, with $c(v)=v\otimes t^m$ on $V_m$ and $t\cdot v=t^m v$. Intertwining maps are exactly degree-preserving linear maps. For affine algebraic sets the coordinate-ring action corresponds to a grading $A=\bigoplus_m A_m$ with $1\in A_0$ and $A_mA_n\subseteq A_{m+n}$. Conversely every such grading of a finitely generated reduced complex algebra produces an affine algebraic $T$-action. In the affine reconstruction assertion assume AC, used only by the published Nullstellensatz and morphism dictionary. For a function of degree $m$, $f(tx)=t^{-m}f(x)$; thus function weights are opposite point-coordinate weights.

## Facts & Assumptions

**Given:** The torus and its Laurent coordinate ring, where $\Delta(t^m)=t^m\otimes t^m$, $\varepsilon(t^m)=1$; AC for affine reconstruction ([[def-axiom-of-choice]]).

[F1] Affine actions correspond to right-comodule algebra maps ([[prop-affine-algebraic-actions-coordinate-ring-coaction]]).

[F2] A reduced finite-type complex algebra is $\mathbb C[z_1,\ldots,z_n]/I$ for radical $I$, and the AC Nullstellensatz identifies this quotient with the coordinate algebra of $V(I)$ ([[def-classical-affine-coordinate-ring]], [[thm-classical-affine-nullstellensatz-correspondence]]).

## Proof

1.1 For a right comodule expand uniquely $c(v)=\sum_m p_m(v)\otimes t^m$, with finitely many nonzero terms for each $v$. Coassociativity and independence of Laurent monomials give $c(p_m(v))=p_m(v)\otimes t^m$, hence $p_np_m=0$ for $n\ne m$ and $p_m^2=p_m$. The counit gives $v=\sum_m p_m(v)$. Therefore $V=\bigoplus_m V_m$, where $V_m=p_m(V)$; uniqueness follows by applying $p_n$ to any finite relation between homogeneous vectors. Evaluation identifies $V_m$ with the character eigenspace. Conversely such a direct sum defines $c$ by this finite formula, which satisfies both comodule identities. Each vector spans, together with its finitely many components, a finite-dimensional stable algebraic subspace, so the resulting action is rational. [given, algebra]

2.1 For completeness an arbitrary rational $T$-module has such a coaction. On a finite-dimensional stable algebraic subspace, expand the regular matrix coefficients of the action in Laurent monomials; the group and identity laws give the comodule identities. On two overlapping subspaces these coactions agree on the intersection because all evaluations agree, and Laurent polynomials are determined by their values on $T$. Thus they glue to $c$ on the union $V$. A linear map intertwines comodules precisely when it preserves each $V_m$, by coefficient comparison. Equivariant rational-module maps also intertwine comodules because their evaluations agree. [step 1.1, given, algebra]

3.1 For a comodule algebra, $c(ab)=c(a)c(b)$ and $c(1)=1\otimes1$ imply $A_mA_n\subseteq A_{m+n}$ and $1\in A_0$. Conversely these grading laws make the coaction in step 1.1 a unital algebra map. F1 reconstructs the action on the affine set with coordinate ring $A$. If the algebra is given abstractly, first use F2 to realize it; reducedness makes its presentation ideal radical. This is the only additional realization required, and is where AC is used. Finally evaluating the coordinate action gives $f(t^{-1}x)=t^m f(x)$, hence replacing $t$ by $t^{-1}$ gives $f(tx)=t^{-m}f(x)$. [F1, F2, step 1.1, step 2.1, algebra] ∎
