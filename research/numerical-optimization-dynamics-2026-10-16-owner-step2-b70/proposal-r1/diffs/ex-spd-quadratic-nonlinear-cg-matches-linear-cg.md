--- items/ex-spd-quadratic-nonlinear-cg-matches-linear-cg.md
+++ items/ex-spd-quadratic-nonlinear-cg-matches-linear-cg.md
@@ -25,7 +25,8 @@
 
 Take $A=\operatorname{diag}(1,2)$, $b=(1,1)$, and
 $$ f(x)=\tfrac12x^TAx-b^Tx,\qquad x_0=(0,0). $$
-An exact-line-search FR run reaches the solution in two steps, with the same directions and steps as linear CG.
+Use exact-SPD-quadratic mode with outer budget $K\ge2$ and
+$c_1=1/10$, $c_2=1/4$. An exact-line-search FR run reaches the solution in two steps, with the same directions and steps as linear CG.
 
 ## Facts & Assumptions
 
