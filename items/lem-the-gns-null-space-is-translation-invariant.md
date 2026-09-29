---
id: lem-the-gns-null-space-is-translation-invariant
kind: lemma
title: The GNS null space is invariant under left translation
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-positive-type-functions-define-a-pre-hilbert-form, def-topological-group]
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, Construction 1.B.5, Chapter 1 §1.B, printed pp. 27–28"
      url: "https://arxiv.org/pdf/1912.07262"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem C.4.10, Appendix C §C.4, printed pp. 376–377"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
axiom_audit: choice-free
---

## Statement

Let $B_\varphi$ be the GNS form on the finitely supported functions
$\mathbb C^{(G)}$, and let $N_\varphi=\{f:B_\varphi(f,f)=0\}$. Then
$N_\varphi$ is a complex linear subspace, and every left translation
$L_g f(x)=f(g^{-1}x)$ maps $N_\varphi$ onto itself. Consequently it induces
an invertible map $[f]\mapsto[L_gf]$ on $\mathbb C^{(G)}/N_\varphi$.

## Facts & Assumptions

[A1] The GNS form is positive semidefinite and sesquilinear, and every null vector is orthogonal to all finitely supported functions ([[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[A2] For finitely supported $f,h$, $B_\varphi(f,h)=\sum_{x,y\in G}f(x)\overline{h(y)}\varphi(y^{-1}x)$ ([[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[A3] $G$ is a group, so its multiplication and inversion obey the group laws ([[def-topological-group]]).

## Proof

**Proof technique:** direct.

**Given:** A topological group $G$, a continuous positive-type function $\varphi$, and its GNS form $B_\varphi$ and null set $N_\varphi$.

1.1 For fixed $g\in G$, the support of $L_g f$ is $g\operatorname{supp}(f)$, so $L_g$ preserves finite support and is complex-linear. The group law gives $L_e=I$, $L_gL_h=L_{gh}$, and $L_g^{-1}=L_{g^{-1}}$. [A1, A3, algebra]

2.1 For finitely supported $f,h$, [A2] gives $$B_\varphi(L_gf,L_gh)=\sum_{a,b\in G}f(g^{-1}a)\overline{h(g^{-1}b)}\varphi(b^{-1}a).$$ Only finitely many terms are nonzero. Substitute $a=gx$ and $b=gy$; then $b^{-1}a=(gy)^{-1}(gx)=y^{-1}x$, so the sum becomes $\sum_{x,y\in G}f(x)\overline{h(y)}\varphi(y^{-1}x)=B_\varphi(f,h)$. Thus left translation preserves the whole form. [A2, A3, step 1.1, algebra]

3.1 If $f,h\in N_\varphi$, [A1] makes all four terms in $B_\varphi(f+h,f+h)$ vanish, and sesquilinearity gives $B_\varphi(\lambda f,\lambda f)=|\lambda|^2B_\varphi(f,f)=0$ for every $\lambda\in\mathbb C$. Hence $N_\varphi$ is a complex linear subspace. Step 2.1 implies $L_gN_\varphi\subseteq N_\varphi$; applying it to $g^{-1}$ and using step 1.1 gives $L_gN_\varphi=N_\varphi$. Therefore if $f-h\in N_\varphi$, then $L_gf-L_gh=L_g(f-h)\in N_\varphi$, so $[f]\mapsto[L_gf]$ is well-defined on the quotient. Its inverse is induced by $L_{g^{-1}}$, and the identities in step 1.1 descend to the quotient. [A1, A3, step 1.1, step 2.1, algebra] ∎
