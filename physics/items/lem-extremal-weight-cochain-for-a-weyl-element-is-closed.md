---
id: lem-extremal-weight-cochain-for-a-weyl-element-is-closed
kind: lemma
title: "The extremal weight cochain of a Weyl element is closed and unique"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-inversion-set-of-a-weyl-group-element, lem-highest-weight-modules-have-weights-below-the-top-weight, prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-integral-dominant-and-strictly-dominant-weights, def-partial-order-on-weights, def-weight-and-weight-space-of-a-lie-algebra-representation, prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces, lem-simple-reflections-preserve-weight-multiplicities, def-chevalley-eilenberg-cochains, def-chevalley-eilenberg-differential, thm-the-chevalley-eilenberg-differential-squares-to-zero, def-lie-algebra-cohomology, thm-root-space-decomposition-relative-to-a-cartan-subalgebra, prop-root-space-brackets-add-their-roots, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, def-killing-form-of-a-semisimple-lie-algebra, prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra, def-weyl-vector-rho-for-a-chosen-positive-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, lem-finite-weyl-positive-roots-and-simple-reflections, lem-finite-weyl-closed-chambers-and-stabilizers, lem-positive-root-pairings-of-a-dominant-integral-weight, def-open-and-closed-weyl-chambers, def-root-reflections-and-the-weyl-group-action, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Roe Goodman and Nolan Wallach, Symmetry, Representations, and Invariants, GTM 255, Appendix E: Cohomology and Character Formulas, §E.2.1–§E.2.6, printed pp.17–30"
      url: "https://sites.math.rutgers.edu/~goodman/pub/symmetry/appe.pdf"
      locator: "§E.2.2–§E.2.5, printed pp.23–26, Lemmas E.2.6–E.2.8, equations (E.40), (E.42), and (E.44)"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.4 printed pp.73–77"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.4, printed pp.73–75, Lemmas 3.4.4–3.4.5 on the cochain weight multiplicity, whose printed equality clause S=Φ^+ must be read as S=Φ^+(w)"
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed p.4, discussion of extremal cochains, not a proof of the equality case; its root condition uses w rather than the inverse-action convention proved here"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak g$ be finite-dimensional complex semisimple with Cartan subalgebra $\mathfrak h$, positive system $\Phi^+$, $\mathfrak n^+=\bigoplus_{\alpha>0}\mathfrak g_\alpha$, Weyl group $W$, $\lambda\in\Lambda^+$ dominant integral and $V=L(\lambda)$. For each $\alpha\in\Phi^+$ fix a nonzero covector $\varepsilon_\alpha\in(\mathfrak n^+)^*_{-\alpha}$ annihilating $\bigoplus_{\beta\neq\alpha}\mathfrak g_\beta$, for each $w\in W$ fix a nonzero $v_{w\lambda}\in V_{w\lambda}$, and let $\Phi_w$ be the inversion set of [[def-inversion-set-of-a-weyl-group-element]] with $p=\ell(w)=|\Phi_w|$. Then
$$\gamma_w=\Bigl(\bigwedge_{\alpha\in\Phi_w}\varepsilon_\alpha\Bigr)\otimes v_{w\lambda}\in C^{p}(\mathfrak n^+,V)$$
is a nonzero cocycle of weight $w\cdot\lambda=w(\lambda+\rho)-\rho$, and the cochain weight space at $w\cdot\lambda$ is one-dimensional in exactly that degree:
$$C^q(\mathfrak n^+,V)_{w\cdot\lambda}=0\ (q\neq\ell(w)),\qquad C^{\ell(w)}(\mathfrak n^+,V)_{w\cdot\lambda}=\mathbb C\gamma_w .$$
Consequently $[\gamma_w]\neq0$ spans the one-dimensional space $H^{\ell(w)}(\mathfrak n^+,V)_{w\cdot\lambda}$, and its one-dimensional cohomology line depends only on $w$ and not on the choices of $\varepsilon_\alpha$, $v_{w\lambda}$ or the ordering.

Equality case (Kostant's lemma): if $\eta$ is a weight of $V$, $S\subseteq\Phi^+$ and $\mu=\eta-\sum_{\alpha\in S}\alpha$ satisfies $\|\mu+\rho\|=\|\lambda+\rho\|$ in the form on $\mathfrak h^*$ induced by the Killing form, then there is a unique $w\in W$ with $\mu=w\cdot\lambda$, $S=\Phi_w$ and $\eta=w\lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice; the root data of $\mathfrak g$ with $\Phi^+$ and $W$; the dominant integral weight $\lambda$ and $V=L(\lambda)$; nonzero $\varepsilon_\alpha\in(\mathfrak n^+)^*$ of weight $-\alpha$; and nonzero $v_{w\lambda}\in V_{w\lambda}$.

[F1] The root-space decomposition $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ holds, each root space is one dimensional, brackets add roots, and $\mathfrak n^+=\bigoplus_{\alpha>0}\mathfrak g_\alpha$ ([[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[prop-root-space-brackets-add-their-roots]], [[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]]).

[F2] $V$ decomposes into weight spaces, its weights are $W$-invariant with $W$-invariant multiplicities, and $\dim V_{w\lambda}=1$ for every $w\in W$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces]], [[lem-simple-reflections-preserve-weight-multiplicities]], [[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]]).

[F3] Every weight $\eta$ of $V$ has the form $\eta=\lambda-\beta$ with $\beta=\sum_in_i\alpha_i$, $n_i\in\mathbb Z_{\ge0}$ ([[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[def-partial-order-on-weights]]).

[F4] The Killing form induces a positive definite inner product on $E=\operatorname{span}_{\mathbb R}\Phi$ which is preserved by $W$, and $\rho=\frac12\sum_{\alpha>0}\alpha$ belongs to $E$ ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[def-killing-form-of-a-semisimple-lie-algebra]], [[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F5] Every $W$-orbit in $E$ has exactly one point in the closed dominant chamber $\overline{\mathcal C}=\{x:(x,\alpha_i)\ge0\text{ for all simple }\alpha_i\}$; consequently a dominant $\nu$ satisfies $(\nu,\alpha)\ge0$ for every $\alpha\in\Phi^+$; and $\langle\lambda+\rho,\beta^\vee\rangle\in\mathbb Z_{>0}$ for every $\beta\in\Phi^+$, so $(\lambda+\rho,\beta)>0$ and $\lambda+\rho$ has trivial stabilizer ([[lem-finite-weyl-closed-chambers-and-stabilizers]], [[def-open-and-closed-weyl-chambers]], [[lem-positive-root-pairings-of-a-dominant-integral-weight]], [[def-integral-dominant-and-strictly-dominant-weights]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[F6] The inversion set satisfies $\rho-w\rho=\sum_{\alpha\in\Phi_w}\alpha$, $\Phi_1=\varnothing$ ([[def-inversion-set-of-a-weyl-group-element]]), and for a simple reflection $s_i$ one has $s_i\rho=\rho-\alpha_i$, while $s_i$ permutes $\Phi^+\setminus\{\alpha_i\}$ and sends $\alpha_i$ to $-\alpha_i$ ([[lem-finite-weyl-positive-roots-and-simple-reflections]], [[def-root-reflections-and-the-weyl-group-action]]).

[F7] The Chevalley–Eilenberg cochains are $C^q(\mathfrak n^+,V)=\operatorname{Hom}_k(\Lambda^q\mathfrak n^+,V)$, the differential is the zero-based two-sum formula, and $d^2=0$ ([[def-chevalley-eilenberg-cochains]], [[def-chevalley-eilenberg-differential]], [[thm-the-chevalley-eilenberg-differential-squares-to-zero]]); cohomology is kernel modulo image ([[def-lie-algebra-cohomology]]).



**Proof technique:** decompose the cochain complex into Cartan weight spaces, prove the subset uniqueness behind Kostant's equality case, and identify the single cochain in each extremal weight.

## Proof

1.1 The dual $\mathfrak h$-weights of $(\mathfrak n^+)^*$ are $-\alpha$, $\alpha\in\Phi^+$, each with multiplicity one: for $H\in\mathfrak h$ and $\varepsilon\in(\mathfrak g_\alpha)^*$ one has $(H\cdot\varepsilon)(x)=-\varepsilon([H,x])=-\alpha(H)\varepsilon(x)$, and distinct root spaces give independent dual summands by [F1]; since $V$ is finite dimensional, the identification $C^q(\mathfrak n^+,V)=\operatorname{Hom}_k(\Lambda^q\mathfrak n^+,V)\cong\Lambda^q(\mathfrak n^+)^*\otimes V$ of [F7] is therefore spanned by the weight subspaces $C^q(\mathfrak n^+,V)_\mu=\sum_{S\subseteq\Phi^+,\,|S|=q}\varepsilon_S\otimes V_{\mu+\langle S\rangle}$, where $\varepsilon_S=\bigwedge_{\alpha\in S}\varepsilon_\alpha$ and $\langle S\rangle=\sum_{\alpha\in S}\alpha$, and a summand is zero when $\mu+\langle S\rangle$ is not a weight of $V$. [F1, F2, F7, algebra]

1.2 The differential preserves the $\mathfrak h$-weight: in both sums of [F7] the loss of the weight $-\alpha_i$ from an exterior slot is exactly compensated by the action $x_i$ raising the weight by $\alpha_i$, or by the bracket $[x_i,x_j]\in\mathfrak g_{\alpha_i+\alpha_j}$, so $d\bigl(C^q(\mathfrak n^+,V)_\mu\bigr)\subseteq C^{q+1}(\mathfrak n^+,V)_\mu$. [F1, F7, algebra]

1.3 For every $u\in W$ and every $S\subseteq\Phi^+$ there is a subset $S'\subseteq\Phi^+$ with $u(\rho-\langle S\rangle)=\rho-\langle S'\rangle$. It suffices to prove this for a simple reflection $u=s_i$, because the claim is stable under composition of the successive simple reflections in a reduced word. For $s_i$: if $\alpha_i\in S$ then $s_i(\rho-\langle S\rangle)=(\rho-\alpha_i)-\bigl(s_i\langle S\setminus\{\alpha_i\}\rangle-\alpha_i\bigr)=\rho-\langle s_i(S\setminus\{\alpha_i\})\rangle$ with $s_i(S\setminus\{\alpha_i\})\subseteq\Phi^+$; if $\alpha_i\notin S$ then $s_i(\rho-\langle S\rangle)=\rho-\alpha_i-s_i\langle S\rangle=\rho-\langle s_i(S)\cup\{\alpha_i\}\rangle$ with $s_i(S)\cup\{\alpha_i\}\subseteq\Phi^+$, and $\alpha_i\notin s_i(S)$ because $s_i$ permutes $\Phi^+\setminus\{\alpha_i\}$. Both cases use $s_i\rho=\rho-\alpha_i$ and $s_i\alpha_i=-\alpha_i$ from [F6]. [F6, algebra]

2.1 If $S\subseteq\Phi^+$ and $\langle S\rangle=\rho-w\rho$, then $S=\Phi_w$. In the group ring $\mathbb Z[P]$ put $\xi=\sum_{S\subseteq\Phi^+}e^{\rho-\langle S\rangle}$. The two-case transformation of step 1.3 for each simple reflection is an involutive bijection of the subsets of $\Phi^+$: it toggles the simple root and permutes all other roots. Hence $\xi$ is $W$-invariant, with coefficients recording the number of subsets giving each exponent. The coefficient at $e^\rho$ is one, since a nonempty sum of positive roots cannot be zero. Invariance implies the coefficient at $e^{w\rho}$ is also one. Thus exactly one subset has sum $\rho-w\rho$; [F6] identifies that subset as $\Phi_w$. No half-root exponent or inverse-Weyl convention is introduced. [F6, step 1.3, algebra]

3.1 (Equality case.) Let $\eta$ be a weight of $V$ and $S\subseteq\Phi^+$ with $\|\eta-\langle S\rangle+\rho\|=\|\lambda+\rho\|$. Choose $u\in W$ with $\nu:=u^{-1}(\eta+\rho-\langle S\rangle)$ dominant, possible by [F5]; then $u^{-1}\eta$ is a weight of $V$ by [F2] and equals $\lambda-\beta$ with $\beta\in Q_+$ by [F3], and $u^{-1}(\rho-\langle S\rangle)=\rho-\langle S'\rangle$ for some subset $S'\subseteq\Phi^+$ by step 1.3, so $\nu=\lambda+\rho-(\beta+\langle S'\rangle)$. Since $\nu$ is dominant and $\lambda+\rho$ is strictly dominant, $(\nu,\alpha)\ge0$ and $(\lambda+\rho,\alpha)>0$ for every $\alpha\in\Phi^+$ by [F5], so, using $W$-invariance of the form for the first equality, $\|\lambda+\rho\|^2=(\nu,\nu)=(\nu,\lambda+\rho)-(\nu,\beta+\langle S'\rangle)\le(\nu,\lambda+\rho)=(\lambda+\rho-\beta-\langle S'\rangle,\lambda+\rho)=\|\lambda+\rho\|^2-(\beta+\langle S'\rangle,\lambda+\rho)\le\|\lambda+\rho\|^2$. Equality holds throughout, so $(\beta+\langle S'\rangle,\lambda+\rho)=0$; as $\beta+\langle S'\rangle\in Q_+$ and $(\lambda+\rho,\alpha)>0$ for every positive root, $\beta=0$ and $S'=\varnothing$. Hence $u^{-1}\eta=\lambda$, so $\eta=u\lambda$, and $\rho-\langle S\rangle=u\rho$, so $\langle S\rangle=\rho-u\rho$; step 2.1 then gives $S=\Phi_u$. If $u_1,u_2$ both satisfy these conclusions for the same $(\eta,S)$, then $\rho-u_1\rho=\langle S\rangle=\rho-u_2\rho$, so $u_1\rho=u_2\rho$ and $u_1=u_2$ because $\rho$ has trivial stabilizer by [F5]. [F2, F3, F5, step 1.3, step 2.1]

4.1 Fix $w\in W$ and $q\ge0$; a cochain in $C^q(\mathfrak n^+,V)_{w\cdot\lambda}$ is a sum of terms $\varepsilon_S\otimes v$ with $|S|=q$ and $v\in V$ satisfying $-\langle S\rangle+\eta=w\cdot\lambda$ for the weight $\eta$ of $v$, that is $\eta-\langle S\rangle=w\cdot\lambda$. Then $\|(\eta-\langle S\rangle)+\rho\|=\|w\cdot\lambda+\rho\|=\|w(\lambda+\rho)\|=\|\lambda+\rho\|$ by $W$-invariance of the form, so the equality case of step 3.1 applies and forces $S=\Phi_w$ and $\eta=w\lambda$; in particular $|S|=\ell(w)$. Hence $C^q(\mathfrak n^+,V)_{w\cdot\lambda}=0$ for $q\neq\ell(w)$, while for $q=\ell(w)$ the only contributing subset is $S=\Phi_w$ with $\eta=w\lambda$, and $V_{w\lambda}$ is one dimensional by [F2], so $C^{\ell(w)}(\mathfrak n^+,V)_{w\cdot\lambda}=\mathbb C\gamma_w$ with $\gamma_w$ as in the Statement. [F2, F4, F5, step 1.1, step 3.1]

5.1 The cochain $\gamma_w$ is nonzero, since the $\varepsilon_\alpha$ are nonzero on the one-dimensional root lines and $v_{w\lambda}\neq0$, and its weight is $-\langle\Phi_w\rangle+w\lambda=(w\rho-\rho)+w\lambda=w(\lambda+\rho)-\rho=w\cdot\lambda$ by [F6]. By steps 1.2 and 4.1 the cochain $d\gamma_w$ lies in $C^{\ell(w)+1}(\mathfrak n^+,V)_{w\cdot\lambda}=0$, so $\gamma_w$ is a cocycle, and it is not a coboundary because $C^{\ell(w)-1}(\mathfrak n^+,V)_{w\cdot\lambda}=0$ by step 4.1; hence $[\gamma_w]\neq0$ spans $H^{\ell(w)}(\mathfrak n^+,V)_{w\cdot\lambda}$, which is therefore one dimensional. Changing any $\varepsilon_\alpha$ or $v_{w\lambda}$ by a nonzero scalar, or changing the order of the wedge, multiplies $\gamma_w$ by a nonzero scalar, so the nonzero class may be rescaled, but its one-dimensional cohomology line depends only on $w$ and not on those choices. [F2, F6, F7, step 1.2, step 4.1] ∎
