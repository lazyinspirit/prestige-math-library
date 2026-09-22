---
id: thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers
kind: theorem
title: Simple transitivity on Weyl chambers
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-open-and-closed-weyl-chambers, prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-positive-system-and-base-of-simple-roots, def-weyl-group-of-a-root-system, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 22, Theorem 22.5, Lemma 22.8 and Proposition 22.15, printed pp. 116-119"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §6, Theorems 2.63 and 2.68 and the length discussion, printed pp. 164-170"
landmark: true
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system and let
$W=W(\Phi)$ be its Weyl group
([[def-weyl-group-of-a-root-system]]). Then $W$ acts simply transitively on
the set of open Weyl chambers of $\Phi$
([[def-open-and-closed-weyl-chambers]]): for any two open chambers $C,C'$
there is exactly one $w\in W$ with $w(C)=C'$.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi\subseteq E$, a positive system with base $\Delta=\{\alpha_1,\ldots,\alpha_r\}$, and its fundamental open chamber $C_+$.

[F1] Root reflections preserve $\Phi$, are orthogonal involutions, and generate the finite group $W$ ([[def-weyl-group-of-a-root-system]], [[prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system]], [[def-reduced-crystallographic-euclidean-root-system]]).

[F2] The simple roots form a basis; every root has integral coordinates all of one sign in that basis, and the positive roots have nonnegative coordinates ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-positive-system-and-base-of-simple-roots]]).

[F3] Chambers are the nonempty regions of constant signs of all root pairings. They are connected components of the root-hyperplane complement. The fundamental chamber is $C_+=\{x:(x,\alpha_i)>0\text{ for all }i\}$; every positive root pairs positively there. The Weyl group permutes chambers ([[def-open-and-closed-weyl-chambers]]).

## Proof

**Proof technique:** simple-root descent, finite-orbit maximization and deletion in a shortest word.

1.1 Write $s_i=s_{\alpha_i}$. If $\beta$ is a positive root other than $\alpha_i$, reducedness and [F2] imply that some coefficient of $\beta$ at an $\alpha_j$ with $j\ne i$ is positive. Reflection $s_i$ changes only the $\alpha_i$ coefficient; hence $s_i\beta$, which is a root, still has a positive coefficient and so has all coefficients nonnegative by [F2]. Thus $s_i$ permutes $\Phi^+\setminus\{\alpha_i\}$ and sends $\alpha_i$ to $-\alpha_i$. Consequently $C_+$ and $s_iC_+$ have opposite signs only on the root hyperplane $L_{\alpha_i}$, using $(s_ix,\beta)=(x,s_i\beta)$. [F1, F2, F3, algebra]

1.2 Choose $a\in C_+$. For any regular $x$ (a point in a chamber), the finite orbit $Wx$ has a point $y$ maximizing $(y,a)$. If $(y,\alpha_i)<0$, then $$(s_i y,a)-(y,a)=-\frac{2(y,\alpha_i)(\alpha_i,a)}{(\alpha_i,\alpha_i)}>0,$$ contradicting maximality. Regularity excludes zero pairings, so all $(y,\alpha_i)>0$ and $y\in C_+$. Since $W$ permutes chambers and $y=wx$, the element $w$ sends the chamber of $x$ onto $C_+$. Thus the action on chambers is transitive. This chooses one maximum in a finite set, not a choice function on an arbitrary family. [F1, F3, algebra]

2.1 Every positive root is carried to a simple root by a product of simple reflections. Indeed, if $\beta=\sum_jb_j\alpha_j$ is positive and nonsimple, then $0<(\beta,\beta)=\sum_jb_j(\beta,\alpha_j)$ gives an $i$ with $(\beta,\alpha_i)>0$. By step 1.1 the root $s_i\beta$ is positive, and its height (the sum of its nonnegative integer coefficients) is strictly smaller: the decrease is the positive integer $2(\beta,\alpha_i)/(\alpha_i,\alpha_i)$. Repetition terminates because height is a positive integer, and a terminal root must be simple. Negative roots have the same reflections as their positives. Orthogonality gives $s_{u\beta}=u s_\beta u^{-1}$ by the reflection formula, so every root reflection is a conjugate, by a word in simple reflections, of a simple reflection. Hence simple reflections generate $W$. [F1, F2, step 1.1, algebra]

3.1 Let $w=s_{i_1}\cdots s_{i_m}$ be an expression with the smallest possible number of simple factors, which exists by step 2.1 and the well-ordering of the nonnegative integers. Put $u_0=1$, $u_k=s_{i_1}\cdots s_{i_k}$, $C_k=u_kC_+$, and $H_k=u_{k-1}L_{\alpha_{i_k}}$. Step 1.1 shows that $C_{k-1}$ and $C_k$ have opposite signs only across $H_k$. No two $H_k$ can coincide. To prove this, if $H_p=H_q$ for $p<q$, their orthogonal reflections are equal. Write $s=s_{i_p}$, $t=s_{i_q}$, and $B=s_{i_{p+1}}\cdots s_{i_{q-1}}$ (the identity if $q=p+1$). Conjugating the equality $u_{p-1}s u_{p-1}^{-1}=u_{q-1}t u_{q-1}^{-1}$ by $u_{p-1}^{-1}$ gives $s=sBtB^{-1}s$. Multiplying gives $sBt=B$. Thus the two factors at positions $p,q$ can be deleted without changing $w$, contradicting minimality. [F1, step 1.1, step 2.1, algebra]

4.1 If $wC_+=C_+$ and $m>0$, then the sign across $H_1$ changes at the first transition of the chain in step 3.1 and must change back before its last chamber, since the endpoints coincide. Each transition changes exactly the sign of its own $H_k$, so $H_k=H_1$ for some $k>1$, contrary to step 3.1. Therefore $m=0$ and $w=1$. This proves triviality of the stabilizer of $C_+$, without identifying a word from its chamber image. [F3, step 3.1, algebra]

5.1 Transitivity makes every chamber stabilizer conjugate to the trivial stabilizer of $C_+$. Hence if $wC=vC=C'$, then $v^{-1}w$ stabilizes $C$, giving $w=v$; existence follows from step 1.2. If $\Phi=\varnothing$, the spanning axiom gives $E=0$, $W=\{1\}$ and the sole chamber is $\{0\}$, so the conclusion also holds. In rank one the two half-lines are interchanged by the single reflection, consistently with the argument. [F1, F3, step 1.2, step 4.1, algebra] ∎
