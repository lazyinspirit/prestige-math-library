---
page: finite-hopf-integrals-frobenius-duality-and-maschke
title: "Finite Hopf Integrals, Frobenius Duality, and Maschke"
status: published
items: []
examples: []
---

An integral is a vector in the regular module transforming by the trivial character. Existence and uniqueness in finite dimension are consequences of the Hopf-module theorem, rather than assertions hidden in a definition. The same construction supplies a nondegenerate associative pairing and an averaging proof of semisimplicity.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-left-right-integrals-and-integral-functionals.** Define Λ by hΛ=ε(h)Λ or Λh=ε(h)Λ, with separate notation for the two spaces. An integral functional is an integral of H* in finite dimension; zero is allowed by the definition and a nonzero element is an existence theorem.

**lem-hh-finite-dual-regular-hopf-module-construction.** For finite H define (f↽h)(x)=f(xS(h)) and the unique ρ(f)=Σf_0⊗f_1 determined by Σp(f_1)f_0(x)=Σp(x_1)f(x_2) for every p,x. HH-1 finite tensor duality proves existence and uniqueness; the right-comodule axioms follow from the left regular H* action. Pair both sides of ρ(f↽h)=Σ(f_0↽h_1)⊗f_1h_2 with p,x; expand ΔS and cancel ΣS(h_2)h_3 to prove compatibility. Coinvariants are precisely left integrals of H*.

**thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective.** Apply HH-7 to the preceding right H Hopf module H*. The isomorphism (H*)^coH⊗H→H* and positive finite dimension give dim((H*)^coH)=1. For a nonzero coinvariant λ, S(h)=0 makes λ↽h=0; injectivity of that isomorphism gives λ⊗h=0 and hence h=0. Finite-dimensional rank-nullity gives bijective S without using S^−1. Apply the same argument to the finite Hopf algebra H* and the proved bidual identification to obtain one-dimensional left integral spaces of H as well. The now bijective antipode transports left integrals to right integrals on both H and H*.

**def-hh-frobenius-functional-and-associative-pairing.** A finite algebra is Frobenius when some λ makes (a,b)↦λ(ab) nondegenerate. This is a property, and the next theorem proves it for finite Hopf algebras.

**thm-hh-finite-hopf-algebras-are-frobenius.** Use a nonzero dual integral and the Hopf-module isomorphism to prove H→H*, h↦λ(h·−), bijective. Derive explicit dual-basis identities from its inverse, supplying both sides and conventions.

**thm-hh-hopf-maschke-integral-averaging.** For finite H prove semisimplicity iff a left integral has ε(Λ)≠0. Forward: split the augmentation using semisimple module theory. Reverse: normalize Λ, average a k-linear retraction using ΔΛ and S, check H-linearity and retraction. Arbitrary infinite-dimensional module splittings require explicit AC; a finite regular-module splitting suffices for ring semisimplicity and avoids such an assertion.

## Reading and applications

Prerequisite pages: [[comodules-matrix-coefficients-and-coalgebra-duality]], [[bialgebras-convolution-and-antipode-identities]], [[hopf-ideals-finite-duals-and-basic-constructions]], [[hopf-modules-coinvariants-and-the-fundamental-theorem]], [[chain-conditions-and-semisimple-modules]]. The companion [[finite-hopf-integrals-frobenius-duality-and-maschke-examples]] develops the calculations and failures needed to test these constructions.
