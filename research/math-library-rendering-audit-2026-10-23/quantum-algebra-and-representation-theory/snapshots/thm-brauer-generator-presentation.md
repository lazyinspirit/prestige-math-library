---
id: thm-brauer-generator-presentation
kind: theorem
title: Generators and defining relations for the Brauer diagram category
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-brauer-and-partition-diagram-categories, lem-brauer-and-partition-composition-is-associative]
proof_strategy: direct
axiom_use: "No choice principle is used; each diagram has finitely many vertices."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, Theorem 2.6 and proof"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 6–12: regular expressions, local reduction Lemmas 2.10–2.13, and the induction completing Theorem 2.6."
---

## Statement

In the $R$-linear Brauer category of [[def-brauer-and-partition-diagram-categories]], identity strands $I$, adjacent crossing $X:2\to2$, cap $A:2\to0$, and cup $U:0\to2$ generate every morphism under composition and juxtaposition. They satisfy the identity/interchange relations and
$$X^2=I^{\otimes2},\qquad (X\otimes I)(I\otimes X)(X\otimes I)=(I\otimes X)(X\otimes I)(I\otimes X),$$
$$A X=A,\qquad A U=\delta\,1_0,\qquad (A\otimes I)(I\otimes X)=(I\otimes A)(X\otimes I),$$
$$ (A\otimes I)(I\otimes U)=I. $$
The dual relations are included. A scaled Brauer diagram means an $R$-multiple of one basis matching. The claim is that these relations are complete: any two words evaluating to the same scaled Brauer diagram are equivalent using them.

## Facts & Assumptions

**Given:** The typed matching modules, stacking operation, and loop scalar in [[def-brauer-and-partition-diagram-categories]].

[F1] [[def-brauer-and-partition-diagram-categories]]: a morphism is an $R$-linear combination of perfect matchings, and stacking contributes $\delta$ for each removed middle loop.

[F2] [[lem-brauer-and-partition-composition-is-associative]]: stacking is associative, so local replacements can be composed in any parenthesization.

## Proof

1.1 Write $1_d=I^{\otimes d}$. A regular expression is a composite of padded elementary maps $1_i\otimes Y\otimes1_j$, $Y\in\{A,U,X\}$. Interchange expands every word into such an expression. Conversely, draw the finitely many edges of a matching as polygonal paths with distinct heights for all crossings and local extrema. Slicing at intervening heights gives a regular expression for that matching. The displayed relations and their horizontal and vertical reflections hold by following their boundary pairs; only $AU$ removes a component, and it removes exactly one. Consequently evaluation gives a surjection from the presented $R$-linear category to [F1]. It remains to prove injectivity, without using any tensor representation. [given, F1, F2, construct]

2.1 We give the regular-expression reduction explicitly. The position of an elementary map is the number of identity strands to its left plus one. Elementary maps supported on disjoint intervals commute by interchange, with the positions after insertion/deletion adjusted by two. Define bending on a word $D:a\to b$ by $R(D)=(D\otimes I)(1_{a-1}\otimes U)$ and, for $b\ge1$, $L(D)=(1_{b-1}\otimes A)(D\otimes I)$. Commuting the extra cup or cap past each padded factor by interchange and then applying the snake relation gives $LR(D)\sim D$ and $RL(D)\sim D$. Here $\sim$ means equality using the proposed relations. Thus equivalence of words is preserved and reflected by bending. It is also preserved and reflected by multiplication by permutation words: to undo an adjacent crossing multiply by that crossing and use $X^2=1$; undo a permutation one crossing at a time. Bend all input vertices to outputs and permute outputs so that the target matching is the adjacent matching $U^{\otimes r}$. These are invertible operations on the diagram basis as well as on words, so it suffices to reduce every regular expression for a scalar multiple of $U^{\otimes r}$. [step 1.1, algebra, construct]

3.1 The local reduction used below is the following cup-train calculation. Start with a cup at position $a$ and successively cross its right leg past $s$ strands: $T_s=X_{a+s}\cdots X_{a+1}U_a$; all subscripts denote positions at the appropriate intermediate object. A cap at position $j$ outside $[a-1,a+s+1]$ commutes below this train. Within that interval it shortens the expression, except that $s=0,j=a$ removes a loop and gives $\delta$. Here are the reductions covering the interval. At $j=a+s$, use $AX=A$ to remove the last crossing. At $j=a+s+1$, use the slide relation to move the cap left across the last crossing, commute that crossing below the other disjoint factors, and repeat; after $s$ repetitions the cap is next to the cup at position $a+1$, and the snake relation deletes that cap and cup. At $a\le j<a+s$, commute the cap down to the first crossing meeting it, use the slide relation, and cancel the two resulting equal adjacent crossings with $X^2=1$ (when the crossing meets the cup use $XU=U$ instead). At $j=a-1$, commute down to the cup and apply the reflected snake relation. Each operation replaces a word with strictly fewer elementary factors, apart from the loop factor which is retained as a scalar. [step 2.1, algebra]

4.1 A crossing outside the same interval commutes below $T_s$. For $a+1\le j<a+s$, commute it to the two consecutive crossings it meets, apply the braid relation, and commute the resulting crossing below the cup; this writes $X_jT_s$ as a train followed by one crossing. At the right endpoint $j=a+s$, cancel the repeated last crossing. At $j=a$, commute towards the cup, use the cup-slide relation and then cancel repeated crossings, or use $XU=U$ when $s=0$. At $j=a+s+1$, the expression is the train $T_{s+1}$. At $j=a-1$, the reflected cup-slide relation moves the starting cup one position left: the expression is a reflected train or shortens by crossing cancellation. Apply the same calculation after reflection whenever the moving leg travels left. Thus a cap or crossing applied to a train either shortens the word (possibly extracting $\delta$), passes below the train, or extends its moving leg by one strand. These calculations use only the listed relations, not an isotopy or a representation. [step 3.1, algebra]

5.1 Read a regular expression $D_1\cdots D_h$ from left to right, so its leftmost factor is applied last. Induct on $r$ and, at fixed $r$, on the pair consisting of length $h$ and the position $p$ of the first cup from the left, ordered lexicographically. If $r=0$ and the word is nonempty, its rightmost factor is a cup and its leftmost factor is a cap. Choose the leftmost cup. Apply steps 3.1–4.1 to the cap/crossing factors on its left, maintaining the train as the moving factor: a factor that passes below the train moves the first cup closer to the left end; a shortening reduces $h$; a train meeting a cap shortens or removes a loop. Since a word $0\to0$ cannot consist only of a cup followed by crossings, a cap is eventually met. Repeating removes every cup and cap, leaving the empty word times exactly one $\delta$ for each removed loop. [step 3.1, step 4.1, induction]

6.1 For $r>0$, $h\ge r$. If $h=r$, all factors are cups; because the output matching is adjacent, their final positions are odd, and interchange orders these cups to $U^{\otimes r}$. If $h>r$ and the leftmost factor is a cup, that cup creates an adjacent pair of the target matching. Delete that pair and its elementary cup, apply the induction for $r-1$ to the remaining word, and restore the cup by interchange. Otherwise take the first cup at position $p>1$ in the word. The factors to its left are caps or crossings. The train calculation either shortens the word, passes a factor to the right of this cup and reduces $p$, or collects all $p-1$ factors into a train. In the last case, if all are crossings, the cup's two endpoints in the final boundary are separated by $p-1$ intervening strands. They cannot form one of the required adjacent pairs when $p>1$. Thus this last case cannot represent $U^{\otimes r}$. If a cap occurs, choose the cap nearest the cup and apply step 3.1 after the intervening crossings have formed a train; this shortens or removes a loop. Hence every nonminimal expression reduces in the stated finite induction to $\delta^N U^{\otimes r}$. The integer $N$ is the number of closed components, since all relations preserve the full connectivity and only loop removal changes that count. [step 5.1, step 3.1, step 4.1, induction]

7.1 Undoing the bends and permutations in step 2.1 gives a fixed representative for each boundary matching and its loop scalar. Thus the presented morphism module is spanned by these representatives. Their evaluations are exactly the distinct free basis matchings in [F1]; any linear relation between the representatives has zero coefficient on every such matching, so all its coefficients vanish in $R$. This proves injectivity, including rings with zero divisors and $\delta=0$, and proves completeness of the relations over arbitrary $R$. Odd boundary spaces are zero; the empty representative is the identity at $0$. [F1, step 2.1, step 6.1, algebra] ∎
