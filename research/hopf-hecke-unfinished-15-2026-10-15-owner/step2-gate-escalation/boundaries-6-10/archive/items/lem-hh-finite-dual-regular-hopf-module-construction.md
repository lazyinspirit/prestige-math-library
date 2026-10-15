---
id: lem-hh-finite-dual-regular-hopf-module-construction
kind: lemma
title: "The finite dual is a right regular Hopf module"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps: [def-hh-left-right-integrals-and-integral-functionals, def-hh-right-right-hopf-module-and-coinvariants, lem-hh-finite-tensor-duality-and-canonical-coevaluation, def-hh-hopf-algebra-and-antipode, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, thm-hh-finite-dimensional-dual-hopf-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "No Choice is used; all duality and separation arguments are in finite dimension."
sources:
  references:
    - title: "Paolo Saracco, Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras (course notes, 2019)"
      url: "https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf"
      locator: "§3, Theorem 3.6 and its proof, PDF pp. 15–17: the regular dual action, induced coaction, and Hopf-module compatibility; §4.1, PDF pp. 18–20"
    - title: "Erasmus Mini-Course on Hopf Algebras (lecture notes)"
      url: "https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf"
      locator: "Lecture 6, pp. 15–16: dual comodule structure, right action, and Theorem 6.3 (which leaves the Hopf-module verification as an exercise)"
verification:
  precheck: pass
---

## Statement

Let $H$ be a finite-dimensional Hopf algebra over a field $k$. For $f\in H^*$ and $h,x\in H$, define
$$
(f\leftharpoonup h)(x)=f(xS(h)).
$$
For $f\in H^*$, define $\rho(f)=\sum f_0\otimes f_1\in H^*\otimes H$ by the requirement
$$
\sum p(f_1)f_0(x)=\sum p(x_1)f(x_2)\qquad(p\in H^*,\ x\in H).
$$
This requirement determines a unique tensor. With this right action and right coaction, $H^*$ is a right-right Hopf module. Its coinvariants are exactly the left integral functionals: $(H^*)^{\operatorname{co}H}=\int_{H^*}^{\ell}$.

## Facts & Assumptions

**Given:** A finite-dimensional Hopf algebra $H$ over $k$; its dual Hopf algebra $H^*$; $f\in H^*$; and $h,x\in H$, $p,q\in H^*$.

[F1] [[def-hh-left-right-integrals-and-integral-functionals]]: left integral functionals satisfy $p*f=p(1)f$ for every $p\in H^*$, with convolution dual to $\Delta_H$.

[F2] [[def-hh-right-right-hopf-module-and-coinvariants]]: a right-right Hopf module has a right $H$-action and right $H$-coaction satisfying $\rho(mh)=\sum m_0h_1\otimes m_1h_2$; its coinvariants satisfy $\rho(m)=m\otimes1$.

[F3] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: for finite-dimensional spaces, tensor duality identifies bilinear pairings with unique tensors, and the finite dual basis separates tensors.

[F4] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: the antipode satisfies $S(hg)=S(g)S(h)$, $\Delta(S(h))=\sum S(h_2)\otimes S(h_1)$, and $\sum S(h_1)h_2=\sum h_1S(h_2)=\varepsilon(h)1$.

[F5] [[thm-hh-finite-dimensional-dual-hopf-algebra]]: since $H$ is finite-dimensional, its full linear dual has the transposed Hopf structure, with convolution product and counit $f\mapsto f(1)$.

## Proof
1.1 For fixed $f$, the right side $B_f(p,x)=\sum p(x_1)f(x_2)$ is bilinear in $(p,x)$. Finite-dimensional tensor duality [F3] identifies such bilinear forms with unique elements of $H^*\otimes H$, proving existence and uniqueness of $\rho(f)$. The assignment $f\mapsto\rho(f)$ is linear because its defining pairing is linear in $f$ and the representing tensor is unique. [given, F3, algebra]

1.2 The formula defines a right action: $((f\leftharpoonup h)\leftharpoonup g)(x)=f(xS(g)S(h))=f(xS(hg))=(f\leftharpoonup(hg))(x)$ by anti-multiplicativity [F4], and $f\leftharpoonup1=f$. Pair each side of $\rho(f\leftharpoonup h)=\sum(f_0\leftharpoonup h_1)\otimes f_1h_2$ with $x,p$. The left side gives $\sum p(x_1)f(x_2S(h))$. The right side gives $\sum p_1(x_1S(h_2))p_2(h_3)f(x_2S(h_1))=\sum p(x_1S(h_2)h_3)f(x_2S(h_1))=\sum p(x_1)f(x_2S(h))$, because $\Delta p=\sum p_1\otimes p_2$ is dual to multiplication, $\Delta(xS(h_1))=\sum x_1S(h_2)\otimes x_2S(h_1)$ by anti-comultiplicativity [F4], and $\sum S(h_2)h_3=\varepsilon(h_2)1$. The pairings agree; finite tensor separation [F3] proves compatibility. [given, F2, F3, F4, algebra]

2.1 The counit identity follows by evaluating $\rho(f)$ against $p=\varepsilon$: $\sum\varepsilon(f_1)f_0(x)=\sum\varepsilon(x_1)f(x_2)=f(x)$. For coassociativity, pair both $ (\rho\otimes\mathrm{id})\rho(f)$ and $(\mathrm{id}\otimes\Delta)\rho(f)$ with $x,p,q$. The first pairing is $\bigl(p*(q*f)\bigr)(x)$ by the defining equation twice; the second is $\bigl((p*q)*f\bigr)(x)$. Convolution is associative because $\Delta$ is coassociative, so the pairings agree for all $x,p,q$, and finite tensor separation [F3] gives equality of the tensors. [step 1.1, F3, F5, algebra]

3.1 The coaction coinvariant condition is equivalent, after pairing with every $p,x$, to $(p*f)(x)=p(1)f(x)$. Since $\varepsilon_{H^*}(p)=p(1)$, this is exactly the definition of a left integral functional in [F1]; hence $(H^*)^{\operatorname{co}H}=\int_{H^*}^{\ell}$. [step 1.1, F1, F5, algebra] ∎
