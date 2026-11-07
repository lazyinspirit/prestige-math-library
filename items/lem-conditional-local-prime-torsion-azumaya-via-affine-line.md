---
id: lem-conditional-local-prime-torsion-azumaya-via-affine-line
kind: lemma
title: "Conditional local Azumaya representability from affine-line H² vanishing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-global-field-regular-local-algebras-have-perfect-smooth-models
  - lem-etale-gm-cohomology-commutes-with-prime-localization
  - lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
  - lem-conditional-semilocal-prime-torsion-finite-cover-effacement
  - lem-finite-flat-splitting-cohomological-brauer-class-is-azumaya
justified_by: []
proof_strategy: direct
axiom_use: "AC/DC are inherited from the smooth-model and semilocal effacement suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Raymond T. Hoobler, A cohomological interpretation of Brauer groups of rings"
      url: "https://msp.org/pjm/1980/86-1/pjm-v86-n1-p05-s.pdf"
      locator: "p. 90, local finite-cover splitting; the perfect-field model and descent reduction are reconstructed below."
verification: {}
---

## Statement

Assume AC and DC. Let $k_0$ be a perfect field, $k/k_0$ a finitely generated field extension, $A$ a regular integral finite-type $k$-algebra, $\mathfrak p\subset A$ a prime, and $\ell\ne\operatorname{char}k_0$ with $r\geq1$. Suppose that, over an algebraic closure $\overline{k_0}$, every smooth finite-type $\overline{k_0}$-scheme $T$ satisfies $R^2(\mathbb A^1_T\to T)_*\mu_{\ell^r}=0$. Then every $\ell^r$-torsion class in $H^2_{\mathrm{et}}(\operatorname{Spec}A_{\mathfrak p},\mathbb G_m)$ is represented by an Azumaya algebra. The affine-line hypothesis is not proved here.

## Facts & Assumptions

**Given:** The perfect field, finitely generated extension, regular algebra, prime, prime power and explicit affine-line hypothesis in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] A regular local ring of a finite-type algebra over a finitely generated extension of a perfect field has a smooth finite-type model over that perfect field. [[lem-global-field-regular-local-algebras-have-perfect-smooth-models]]

[F2] Actual étale $\mathbb G_m$ cohomology commutes with prime localization, and torsion descends after shrinking. [[lem-etale-gm-cohomology-commutes-with-prime-localization]]

[F3] Fixed finite-coefficient étale cohomology, finite diagrams and zero witnesses descend through affine inverse limits of quasi-compact quasi-separated schemes. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

[F4] Under the stated affine-line hypothesis, a prime-power class on a smooth affine variety over an algebraically closed field is killed on a finite étale cover of an open containing any prescribed finite set. [[lem-conditional-semilocal-prime-torsion-finite-cover-effacement]]

[F5] A class split by a finite locally free surjection is represented by an Azumaya algebra. [[lem-finite-flat-splitting-cohomological-brauer-class-is-azumaya]]

## Proof

**Proof technique:** spread the local class to a perfect-field model, split it geometrically near a finite fibre, and descend the finite splitting cover.

1.1 Let $n=\ell^r$ and let $\alpha$ be an $n$-torsion class on $A_{\mathfrak p}$. By [F1], identify this local ring with $C_{\mathfrak q}$ for a smooth integral finite-type $k_0$-algebra $C$. By [F2], after replacing $C$ by a principal localization not meeting $\mathfrak q$, the class descends to an $n$-torsion class $\alpha_C$ on $\operatorname{Spec}C$. The Kummer exact sequence for invertible $n$ then lifts $\alpha_C$ to a class $\beta\in H^2(C,\mu_n)$. [A1, F1, F2, given, choose, construct, algebra]

2.1 Since $C$ is finite type over a field, it is Jacobson; choose a closed point $z$ specializing $\mathfrak q$. After base change to $\overline{k_0}$, the smooth affine scheme $C_{\overline{k_0}}$ has finitely many open-and-closed integral components, and the geometric fibre over $z$ is a finite set of closed points. Apply [F4] on each component meeting that finite set to the pullback of $\beta$. Their union gives a quasi-compact open $U_{\overline{k_0}}$ containing the entire fibre over $z$ and a finite étale surjection $V_{\overline{k_0}}\to U_{\overline{k_0}}$ killing $\beta$ there. [A1, F4, step 1.1, given, choose, construct, algebra]

3.1 The open, finite étale algebra, surjectivity witness, and the equality that $\beta$ pulls back to zero descend to a finite extension $k'/k_0$: use finite presentation for the open and cover, and [F3] for the finite-coefficient zero witness. Since $k_0$ is perfect, $k'/k_0$ is separable. Write $h:C_{k'}\to C$ for the resulting finite étale base extension and $U'\subset C_{k'}$ for the descended open. Its complement has closed image under the finite map $h$, and that image misses $z$ because $U_{\overline{k_0}}$ contains the whole geometric fibre above $z$. Remove the image to obtain an open neighborhood $W$ of $z$; it also contains the generization $\mathfrak q$. Over $W$, the composite of the descended finite étale cover with $h$ is a finite étale surjection killing $\beta$ and hence $\alpha_C$. [A1, F3, step 2.1, choose, construct, algebra]

4.1 Restrict the cover of step 3.1 to $\operatorname{Spec}C_{\mathfrak q}\cong\operatorname{Spec}A_{\mathfrak p}$. It remains finite étale and surjective, with positive constant degree on this local scheme, and it kills $\alpha$. By [F5] the class is represented by an Azumaya algebra. No assertion of the affine-line hypothesis is made. [F5, step 1.1, step 3.1, algebra] ∎
