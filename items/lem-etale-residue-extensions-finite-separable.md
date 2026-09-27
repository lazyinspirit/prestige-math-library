---
id: "lem-etale-residue-extensions-finite-separable"
kind: "lemma"
title: "Unramified residue extensions are finite separable"
status: published
origin: "pipeline"
deps: ["def-axiom-of-choice", "def-locally-finite-type-and-finite-type-morphism", "def-sheaf-relative-differentials", "def-residue-field-scheme-point", "def-localisation-at-a-prime-ideal", "def-finite-type-and-module-finite-algebras", "def-finitely-generated-field-extension", "def-separable-elements-and-separable-extensions", "def-ag-separating-transcendence-basis", "def-local-ring", "def-jacobson-radical-of-a-ring", "def-unramified-morphism-finite-type", "def-formally-etale-morphism", "thm-formally-unramified-differentials-zero", "lem-sheaf-differentials-affine-compatibility", "lem-differentials-localization", "lem-differentials-base-change", "thm-localisation-at-a-prime-is-local", "thm-localisation-of-modules-is-tensor-product", "cor-tensor-product-with-a-quotient-ring", "cor-residue-field-of-a-localisation-at-a-prime", "thm-conormal-exact-sequence-algebra", "thm-transitivity-exact-sequence-differentials", "cor-derivations-represented-by-differentials", "lem-field-is-noetherian", "cor-finite-type-algebra-over-noetherian-ring-is-noetherian", "thm-noetherian-ring-quotients-and-localisations", "thm-nakayama-lemma", "lem-finite-type-field-zero-differentials-finite-separable", "lem-ag-separable-residue-cotangent-sequence", "thm-finitely-generated-algebraic-extensions-are-finite"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra, Lemma 10.151.5 (tag 00UW) and Stacks Morphisms, Lemma 29.36.12 (tag 02G8)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f\colon X\to S$ be a
morphism of schemes, let $x\in X$ and put $s=f(x)$. Suppose that $f$ is locally
of finite type at $x$ ([[def-locally-finite-type-and-finite-type-morphism]]):
there are affine opens $\operatorname{Spec}B\subseteq X$ containing $x$ and
$\operatorname{Spec}A\subseteq S$ containing $s$ with $f(\operatorname{Spec}B)
\subseteq\operatorname{Spec}A$ and $B$ a finitely generated $A$-algebra. Suppose
further that the stalk at $x$ of $\Omega_{X/S}$ vanishes
([[def-sheaf-relative-differentials]]). Write $\mathfrak m_x$ for the maximal
ideal of $\mathcal O_{X,x}$ and $\mathfrak m_{s}$ for the maximal ideal of
$\mathcal O_{S,s}$, and let $\kappa(x)$ and $\kappa(s)$ be the residue fields
([[def-residue-field-scheme-point]]). Then

1. $\kappa(x)/\kappa(s)$ is a finite separable extension
   ([[def-separable-elements-and-separable-extensions]]), and
2. $\mathfrak m_{s}\mathcal O_{X,x}=\mathfrak m_x$.

In particular both conclusions hold at every point of an unramified morphism
([[def-unramified-morphism-finite-type]]), and at every point of a morphism
which is locally of finite type and formally etale
([[def-formally-etale-morphism]]). The Axiom of Choice is used only through the
finite-type field lemma [[lem-finite-type-field-zero-differentials-finite-separable]]
and Nakayama's lemma; the separable-residue cotangent input
[[lem-ag-separable-residue-cotangent-sequence]] is choice-free. No flatness,
finite presentation or separatedness hypothesis is imposed.

## Facts & Assumptions

**Given:** A morphism $f\colon X\to S$ of schemes, a point $x\in X$ with
$s=f(x)$, affine opens $\operatorname{Spec}B\subseteq X$ and
$\operatorname{Spec}A\subseteq S$ with $x\in\operatorname{Spec}B$,
$f(\operatorname{Spec}B)\subseteq\operatorname{Spec}A$ and $B$ a finitely
generated $A$-algebra, and $\Omega_{X/S,x}=0$.

[F1] [[def-locally-finite-type-and-finite-type-morphism]]: $f$ is locally of
finite type at $x$ exactly when $x$ has an affine open neighbourhood
$U=\operatorname{Spec}B$ whose image lies in an affine open $V=\operatorname{Spec}A$
of $S$ with $A\to B$ of finite type, that is, $B$ generated as an $A$-algebra
by finitely many elements $b_1,\dots,b_N$.

[F2] [[lem-sheaf-differentials-affine-compatibility]],
[[lem-differentials-localization]], [[def-localisation-at-a-prime-ideal]],
[[thm-localisation-at-a-prime-is-local]],
[[def-residue-field-scheme-point]] and
[[cor-residue-field-of-a-localisation-at-a-prime]]: on the affine chart
$\operatorname{Spec}B$ the sheaf $\Omega_{X/S}$ is the sheaf attached to
$\Omega_{B/A}$, so for the prime $\mathfrak p\subseteq B$ with $x=\mathfrak p$
and $\mathfrak q=\mathfrak p\cap A$ the stalk is
$$\Omega_{X/S,x}\cong(\Omega_{B/A})_{\mathfrak p}\cong\Omega_{B_{\mathfrak p}/A_{\mathfrak q}},\qquad B_{\mathfrak p}=\mathcal O_{X,x},\qquad A_{\mathfrak q}=\mathcal O_{S,s}.$$
Moreover $B_{\mathfrak p}$ is a local ring with maximal ideal
$\mathfrak m:=\mathfrak pB_{\mathfrak p}$, $\mathfrak m_s:=\mathfrak qA_{\mathfrak q}$
is the maximal ideal of the local ring $A_{\mathfrak q}$, one has
$\mathfrak m_sB_{\mathfrak p}\subseteq\mathfrak m$, and
$$\kappa(x)\cong B_{\mathfrak p}/\mathfrak pB_{\mathfrak p}\cong\operatorname{Frac}(B/\mathfrak p),\qquad \kappa(s)\cong A_{\mathfrak q}/\mathfrak qA_{\mathfrak q}\cong\operatorname{Frac}(A/\mathfrak q).$$

[F3] [[def-finitely-generated-field-extension]]: a field extension
$K=k(\alpha_1,\dots,\alpha_n)$ generated by finitely many elements is finitely
generated; an algebraic finitely generated extension inside a fixed finitely
generated one is finite by [[thm-finitely-generated-algebraic-extensions-are-finite]].

[F4] [[def-axiom-of-choice]]: the Axiom of Choice is assumed in this item; it is
consumed by [[lem-finite-type-field-zero-differentials-finite-separable]] and
[[thm-nakayama-lemma]].

[F5] [[thm-conormal-exact-sequence-algebra]],
[[thm-transitivity-exact-sequence-differentials]] and
[[cor-derivations-represented-by-differentials]]: for a ring map $A'\to P$ and an
ideal $I\subseteq P$ with $B'=P/I$ the sequence
$I/I^2\to B'\otimes_P\Omega_{P/A'}\to\Omega_{B'/A'}\to0$ is exact; for ring maps
$A'\to B'\to C'$ the sequence
$C'\otimes_{B'}\Omega_{B'/A'}\to\Omega_{C'/A'}\to\Omega_{C'/B'}\to0$ is exact;
and $\Omega_{A'/A'}=0$ because $\operatorname{Hom}(\Omega_{A'/A'},M)\cong\operatorname{Der}_{A'}(A',M)=0$
for every $A'$-module $M$. In particular, if $A'\to B'$ is surjective then
$\Omega_{B'/A'}=0$: apply the conormal sequence to $P=A'$, $I=\ker(A'\to B')$.

[F6] [[lem-finite-type-field-zero-differentials-finite-separable]]: assuming
Choice, a finitely generated field extension with vanishing module of
differentials is finite and separable.

[F7] [[lem-ag-separable-residue-cotangent-sequence]]: let $k$ be a field and $R$
a Noetherian local $k$-algebra with maximal ideal $\mathfrak m$ and residue field
$\kappa$, finitely generated and separably generated over $k$; then
$0\to\mathfrak m/\mathfrak m^2\to\Omega_{R/k}\otimes_R\kappa\to\Omega_{\kappa/k}\to0$
is exact. If in addition $\kappa/k$ is finite separable, then
$\Omega_{\kappa/k}=0$ and the first map is an isomorphism
$\mathfrak m/\mathfrak m^2\cong\Omega_{R/k}\otimes_R\kappa$.

[F8] [[def-ag-separating-transcendence-basis]]: a finitely generated extension
admitting a separating transcendence basis is separably generated, and the empty
tuple is a separating transcendence basis exactly when the extension is finite
separable; so every finite separable extension is separably generated.

[F9] [[lem-differentials-base-change]], [[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] and
[[thm-noetherian-ring-quotients-and-localisations]]: for ring maps $A\to B$,
$A\to A'$ there is an isomorphism
$\Omega_{B/A}\otimes_B(B\otimes_AA')\cong\Omega_{(B\otimes_AA')/A'}$; a field is
a Noetherian ring, every finitely generated algebra over a Noetherian ring is
Noetherian, and quotients and localisations of Noetherian rings are Noetherian.

[F10] [[thm-localisation-of-modules-is-tensor-product]] and
[[cor-tensor-product-with-a-quotient-ring]]: for a ring $R$, multiplicative
$S\subseteq R$ and $R$-module $M$ one has $S^{-1}M\cong S^{-1}R\otimes_RM$, and
for an ideal $I\subseteq R$ one has $M\otimes_R(R/I)\cong M/IM$.

[F11] [[thm-nakayama-lemma]], [[def-jacobson-radical-of-a-ring]] and
[[def-local-ring]]: assuming Choice, if $I\subseteq J(R)$ and $M$ is a finitely
generated $R$-module with $IM=M$, then $M=0$; in a local ring $J(R)$ is the
unique maximal ideal and the maximal ideal of a nonzero local ring is finitely
generated as soon as the ring is Noetherian.

[F12] [[def-unramified-morphism-finite-type]],
[[thm-formally-unramified-differentials-zero]] and
[[def-formally-etale-morphism]]: $f$ is unramified exactly when it is locally of
finite type and $\Omega_{X/S}=0$; a morphism is formally unramified exactly when
$\Omega_{X/S}=0$; and $f$ is formally etale when it is formally smooth and
formally unramified, so a formally etale morphism satisfies $\Omega_{X/S}=0$.

## Proof

**Proof technique:** direct.

1.1 The local picture. Let $\mathfrak p\subseteq B$ be the prime with $x=\mathfrak p$ and $\mathfrak q=\mathfrak p\cap A$, so that $s=f(x)$ corresponds to $\mathfrak q$. Put $R:=B_{\mathfrak p}=\mathcal O_{X,x}$ and $A':=A_{\mathfrak q}=\mathcal O_{S,s}$, with maximal ideals $\mathfrak m=\mathfrak pB_{\mathfrak p}$ and $\mathfrak m_s=\mathfrak qA_{\mathfrak q}$. By [F2], $\kappa(x)=\operatorname{Frac}(B/\mathfrak p)$, $\kappa(s)=\operatorname{Frac}(A/\mathfrak q)$, $\mathfrak m_sR\subseteq\mathfrak m$, and the hypothesis reads $\Omega_{R/A'}=(\Omega_{B/A})_{\mathfrak p}=\Omega_{X/S,x}=0$. [given, F1, F2]

1.2 Choice. Assume the Axiom of Choice [F4]; it is consumed below only by the two Choice-dependent results [F6] and [F11], while the separable-residue supplier [F7] is choice-free. [given, F4]

2.1 The residue extension is finitely generated. By [F1] the $A$-algebra $B$ is generated by finitely many elements $b_1,\dots,b_N$, so $B/\mathfrak p$ is generated as an $A/\mathfrak q$-algebra, hence as a $\kappa(s)$-algebra, by the images of the $b_i$; therefore $\kappa(x)=\operatorname{Frac}(B/\mathfrak p)$ is a finitely generated field extension of $\kappa(s)$ in the sense of [F3]. [step 1.1, F1, F3]

2.2 The differentials of the residue extension vanish. Apply the conormal sequence [F5] to the ring map $A'\to R$ and the ideal $\mathfrak m\subseteq R$ with $R/\mathfrak m=\kappa(x)$: the sequence $\mathfrak m/\mathfrak m^2\to\kappa(x)\otimes_R\Omega_{R/A'}\to\Omega_{\kappa(x)/A'}\to0$ is exact, and $\Omega_{R/A'}=0$ by step 1.1, so $\Omega_{\kappa(x)/A'}=0$. The structure map $A'\to\kappa(x)$ factors as $A'\to\kappa(s)\to\kappa(x)$ with $A'\to\kappa(s)$ surjective, and $\Omega_{\kappa(s)/A'}=0$ by [F5]; the transitivity sequence [F5] for $A'\to\kappa(s)\to\kappa(x)$ has first term $\Omega_{\kappa(s)/A'}\otimes_{\kappa(s)}\kappa(x)=0$ and is exact at $\Omega_{\kappa(x)/A'}$, so the natural map $\Omega_{\kappa(x)/A'}\to\Omega_{\kappa(x)/\kappa(s)}$ is an isomorphism. Hence $\Omega_{\kappa(x)/\kappa(s)}=0$. [step 1.1, F5]

2.3 The fibre ring. Put $\bar R:=R/\mathfrak m_sR$, $\bar{\mathfrak m}:=\mathfrak m/\mathfrak m_sR$. By [F10], $\bar R\cong R\otimes_{A'}\kappa(s)=B_{\mathfrak p}\otimes_{A_{\mathfrak q}}\kappa(s)\cong(B\otimes_A\kappa(s))_{\mathfrak p}$, the last isomorphism because localisation is extension of scalars and $\kappa(s)=A_{\mathfrak q}/\mathfrak qA_{\mathfrak q}$; hence $\bar R$ is a localisation of the finitely generated $\kappa(s)$-algebra $B\otimes_A\kappa(s)$ [F9], so $\bar R$ is a Noetherian local $\kappa(s)$-algebra with maximal ideal $\bar{\mathfrak m}$ and residue field $\bar R/\bar{\mathfrak m}\cong R/\mathfrak m=\kappa(x)$. [step 1.1, F9, F10]

3.1 $\kappa(x)/\kappa(s)$ is finite separable. By step 2.1 the extension $\kappa(x)/\kappa(s)$ is finitely generated and by step 2.2 it has vanishing module of differentials, so [F6], applied under the Axiom of Choice of step 1.2, shows that $\kappa(x)/\kappa(s)$ is finite and separable. [step 1.2, step 2.1, step 2.2, F6]

3.2 The differentials of the fibre ring vanish. By [F9], $\Omega_{(B\otimes_A\kappa(s))/\kappa(s)}\cong\Omega_{B/A}\otimes_B(B\otimes_A\kappa(s))$; localising at $\mathfrak p$ and using $\Omega_{R/A'}=(\Omega_{B/A})_{\mathfrak p}=0$ from step 1.1 together with $\bar R\cong(B\otimes_A\kappa(s))_{\mathfrak p}$ from step 2.3 gives $\Omega_{\bar R/\kappa(s)}\cong(\Omega_{B/A})_{\mathfrak p}\otimes_{B_{\mathfrak p}}\bar R=0$. [step 1.1, step 2.3, F9]

4.1 The cotangent space of the fibre ring vanishes. The field $\kappa(x)$ is a finite separable extension of $\kappa(s)$ by step 3.1, hence separably generated over $\kappa(s)$ by [F8]; the ring $\bar R$ is a Noetherian local $\kappa(s)$-algebra with residue field $\kappa(x)$ by step 2.3, so the supplier [F7] applies and the injective cotangent map is an isomorphism $\bar{\mathfrak m}/\bar{\mathfrak m}^2\cong\Omega_{\bar R/\kappa(s)}\otimes_{\bar R}\kappa(x)=0$, the vanishing being step 3.2. [step 2.3, step 3.1, step 3.2, F7, F8]

5.1 The maximal ideal of the fibre ring is zero. Since $\bar R$ is Noetherian [step 2.3], the ideal $\bar{\mathfrak m}$ is finitely generated, and $\bar{\mathfrak m}/\bar{\mathfrak m}^2=0$ by step 4.1 means $\bar{\mathfrak m}=\bar{\mathfrak m}^2$. As $\bar{\mathfrak m}=J(\bar R)$ is the Jacobson radical of the local ring $\bar R$ [F11], Nakayama's lemma [F11] with $I=M=\bar{\mathfrak m}$ gives $\bar{\mathfrak m}=0$. [step 2.3, step 4.1, F11]

6.1 The maximal ideals match. Since $\bar{\mathfrak m}=\mathfrak m/\mathfrak m_sR$ is zero by step 5.1, we get $\mathfrak m=\mathfrak m_sR$, that is $\mathfrak m_{f(x)}\mathcal O_{X,x}=\mathfrak m_x$. [step 1.1, step 2.3, step 5.1]

7.1 Conclusion. Steps 3.1 and 6.1 prove the two assertions under the stated hypotheses. If $f$ is unramified then $\Omega_{X/S}=0$ by [F12], so the hypotheses hold at every point $x$; if $f$ is formally etale and locally of finite type then $\Omega_{X/S}=0$ by [F12] and again the hypotheses hold at every point. The Axiom of Choice entered only through [F6] in step 3.1 and [F11] in step 5.1. [step 3.1, step 6.1, F12] ∎
